import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { menuSidebar } from '../constants/MenuSidebar'; 
import { Route, Routes } from 'react-router-dom';
import { routes } from '../constants/routes';
const { Header, Sider, Content } = Layout;

function MainLayout() {
    const [collapsed, setCollapsed] = useState(false);
const handleClick = () =>{
  setCollapsed(!collapsed)
}
  return (
    <Layout >
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuSidebar}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => handleClick()}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
         <Routes>
            {routes.map(item =>(
                <Route path={item.path} element = {item.element} key={item.path}/>  
            ))}
         </Routes>
      </Content>
    </Layout>
  </Layout>  
  )
}

export default MainLayout
