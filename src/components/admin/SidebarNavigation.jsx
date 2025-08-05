import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

const SidebarNavigation = () => {

    const links = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: 'bi bi-house'
        },
        {
            title: 'Products',
            url: '/products',
            icon: 'bi bi-box-seam',
            Children: [
                { title: 'Add Product', url: '/products/add' },
                { title: 'Edit Product', url: '/products/edit' },
            ]
        },
        {
            title: 'Orders',
            url: '/orders',
            icon: 'bi bi-bag-check'
        },
        {
            title: 'Users',
            url: '/users',
            icon: 'bi bi-people'
        },
    ]
    return (
        <nav>
            <ul className="nav navbar-nav">
                {links.map((link, index) => (
                    <li key={index} className="menu-item">
                        {
                            link.Children ? (

                                <NavLink to={`/admin${link.url}`} data-bs-toggle="collapse" data-bs-target={`#${index}`} className="sidebar-link dropdown-toggle">
                                    <i className={`${link.icon} me-2`}></i>
                                    <span>{link.title}</span>
                                </NavLink>

                            ) : (
                                <NavLink to={`/admin${link.url}`} className="sidebar-link">
                                    <i className={`${link.icon} me-2`}></i>
                                    <span>{link.title}</span>
                                </NavLink>
                            )
                        }

                        {
                            link.Children && (
                                <ul id={index} className="sidebar-dropdown list-unstyled collapse">
                                    {link.Children.map((child, index) => (
                                        <li key={index} className="menu-item">
                                            <NavLink to={`/admin${child.url}`} className="sidebar-link">
                                                {child.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SidebarNavigation