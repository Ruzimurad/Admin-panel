import { Form, Input, Modal } from 'antd'
import React, { useEffect } from 'react'
import Axios from '../api';
import { urls } from '../constants/urls';

function BannersModal({ isModalOpen, setIsModalOpen, getBanners, editingData, setEditigData }) {
    const [form] = Form.useForm()

    const closeModal = () => {
        setIsModalOpen(false);
        form.resetFields()
        setEditigData(null)

    };
    const handleOk = () => {
        form.submit()
    };
    useEffect(() => {
        form.setFieldsValue(editingData)
    }, [editingData])

    const handleFinish = (values) => {
        if (editingData === null) {
            Axios.post(urls.banners.post, values).then(res => {
                if (res.status === 201) {
                    getBanners()
                }
            })
                .catch(err => console.log("Error:", err))
        }else{
            Axios.patch(urls.banners.edit(editingData.id),values) .then(res =>{
                if(res.status === 200){
                    getBanners()
                }
            })
        }
        closeModal();
    }
    return (

        <Modal title={editingData ? "Edit Banner" : "Add Banner"} 
        open={isModalOpen} 
        onOk={handleOk} 
        okText = {editingData ? "Edit " : "Add "}
        onCancel={closeModal}>
            <Form
                form={form}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="img"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your image!',
                        },
                    ]}
                >
                    <Input type='url' />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default BannersModal
