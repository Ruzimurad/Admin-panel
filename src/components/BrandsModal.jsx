// import { Form, Input, Modal } from 'antd'
// import { urls } from '../constants/urls';

// function BannersModal({ isModalOpen, setIsModalOpen, getBrands}) {
//     const [form] = Form.useForm()

//     const closeModal = () => {
//         setIsModalOpen(false);
//         form.resetFields()
//     };
//     const handleOk = () => {
//         form.submit()
//     };

//     return (

//             <Form
//                 form={form}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={handleFinish}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Name"
//                     name="name"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your name!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Image"
//                     name="img"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your image!',
//                         },
//                     ]}
//                 >
//                     <Input type='url' />
//                 </Form.Item>
//             </Form>
//     )
// }

// export default BrandsModal


import React from 'react'

function BrandsModal() {
  return (
    <div>
      
    </div>
  )
}

export default BrandsModal
