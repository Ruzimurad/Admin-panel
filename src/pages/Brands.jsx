// import React, { useEffect, useState } from 'react'
// import Axios from '../api'
// import { Button, Card, Flex, Popconfirm, Space } from 'antd'
// import { DeleteOutlined } from '@ant-design/icons';
// import BrandsModal from "../components/BrandsModal"
// import { urls } from './../constants/urls';
// const { Meta } = Card;


// function Brands() {
//   const [brands, setBrands] = useState([])
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   function getBrands() {
//     Axios.get(urls.brands.get).then(res => setBrands(res.data))
//   }
//   console.log(brands);
  

//   useEffect(() => {
//     getBrands()
//   }, [])

//   const handleClick = (data) => {
//     Axios.delete(urls.brands.delete(data.id)).then(res => {
//       if (res.status === 200){
//         getBrands()
//       }
//     }) .catch(err => console.log("Error:", err))

//   }

//   return (
//     <>
//       <Flex justify='flex-end'>
//         <Button type='primary' className='add-button'
//           onClick={showModal}
//         >+ Add banner</Button>
//       </Flex>
//       <Space wrap size={24}>
//         {
//           brands.map(item => (
//             <Card
//               key={item.id}
//               style={{
//                 width: 300,
//               }}
//               cover={
//                 <img
//                   alt={item.name}
//                   src={item.img}
//                 />
//               }
//               actions={[
//                 <Popconfirm
//                   title="Delete the task"
//                   description="Are you sure to delete this task?"
//                   onConfirm={() => handleClick(item)}
//                   okText="Yes"
//                   cancelText="No"
//                 >
//                   <DeleteOutlined key='delete' />
//                 </Popconfirm>

//               ]}
//             >
//               <Meta title={item.name} />
//             </Card>
//           ))
//         }
//       </Space>
//       <BrandsModal 
//       isModalOpen={isModalOpen}
//       setIsModalOpen={setIsModalOpen}
//       />
//     </>
//   )
// }

// export default Brands


import React from 'react'

function Brands() {
  return (
    <div>
      brands
    </div>
  )
}

export default Brands
