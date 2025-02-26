import React, { useEffect, useState } from 'react'
import Axios from '../api'
import { Button, Card, Flex, Popconfirm, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import BannersModal from '../components/BannersModal';
import { urls } from './../constants/urls';
const { Meta } = Card;


function Banners() {
  const [banners, setBanners] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [editingData, setEditingData] = useState(null)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  function getBanners() {
    Axios.get(urls.banners.get).then(res => setBanners(res.data))
  }
  console.log(banners);
  

  useEffect(() => {
    getBanners()
  }, [])

  const handleClick = (data) => {
    Axios.delete(urls.banners.delete(data.id)).then(res => {
      if (res.status === 200){
        getBanners()
      }
    }) .catch(err => console.log("Error:", err))

  }

  const handleEdit = (data) =>{
    setEditingData(data)
    setIsModalOpen(true)
  }
  return (
    <>
      <Flex justify='flex-end'>
        <Button type='primary' className='add-button'
          onClick={showModal}
        >+ Add banner</Button>
      </Flex>
      <Space wrap size={24}>
        {
          banners.map(item => (
            <Card
              key={item.id}
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt={item.name}
                  src={item.img}
                />
              }
              actions={[
                <EditOutlined key="edit"  onClick={() => handleEdit(item)}/>,
                <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={() => onConfirm(record)}
                okText="Yes"
                cancelText="No"
                ></Popconfirm>
              ]}
            >
              <DeleteOutlined key="delete" onClick={() => handleClick(item)}/>
              <Meta title={item.name} />
            </Card>
          ))
        }
      </Space>
      <BannersModal 
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleOk={handleOk}
      getBanners={getBanners}
      editingData={editingData}
      setEditingData={setEditingData} />
    </>
  )
}

export default Banners
