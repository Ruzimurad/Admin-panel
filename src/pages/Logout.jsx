import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { Popconfirm } from 'antd';

function Logout({ children }) {
  const { logout } = useContext(AuthContext)

  const confirm = () => {
    logout()
  };

  return (
    <Popconfirm
      title="Log out"
      description="Are you sure to log out?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      {children}
    </Popconfirm>
  )
}

export default Logout