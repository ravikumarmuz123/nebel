import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import Header from '../components/admin/Header'
import './AdminLayout.css'

const AdminLayout = () => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <main id="adminContent" className='py-4'>
          <div className="container-fluid gx-5"><Outlet /></div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout