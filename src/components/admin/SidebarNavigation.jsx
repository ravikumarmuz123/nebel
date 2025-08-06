import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

const SidebarNavigation = () => {

    const links = [
        {
            title: 'Dashboard',
            url: '/',
            icon: 'bi bi-house'
        },
        {
            title: 'Products',
            url: '/products',
            icon: 'bi bi-box-seam',
            Children: [
                { title: 'Product List', url: '/products' },
                { title: 'Add Product', url: '/products/add' },
                { title: 'Variations', url: '/products/variations' },
            ]
        },
        {
            title: 'Categories',
            url: '/categories',
            icon: 'bi bi-box-seam',
            Children: [
                { title: 'Category List', url: '/categories' },
                { title: 'Add Category', url: '/categories/add' },
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

                                <NavLink to={`/admin${link.url}`} data-bs-toggle="collapse" data-bs-target={`#${index}`} className="sidebar-link">
                                    <i className={`${link.icon} me-2`}></i>
                                    <span>{link.title}</span>
                                    <i className="bi bi-chevron-down ms-auto"></i>
                                </NavLink>

                            ) : (
                                <NavLink to={`/admin${link.url}`} className="sidebar-link" end>
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
                                            <NavLink to={`/admin${child.url}`} className="sidebar-link" end>
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