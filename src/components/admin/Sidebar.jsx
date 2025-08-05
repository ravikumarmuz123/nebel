import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/assetsManager'
import SidebarNavigation from './SidebarNavigation'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside id='adminSidebar' className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo py-4 px-3">
        <Link to='/admin' className='text-decoration-none'>
          {/* <img src={images.siteLogo} width={200} alt="Nebel KG" /> */}
          <h4 className='text-center text-light'>Nebel KG</h4>
        </Link>
      </div>

      <SidebarNavigation />

    </aside>
  )
}

export default Sidebar