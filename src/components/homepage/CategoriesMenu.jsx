import React from 'react'
import { NavLink } from 'react-router-dom'
import './CategoriesMenu.css'
import { categories } from '../../assets/assetsManager'

const CategoriesMenu = () => {
    return (
        <div className="categories-menu-wrapper">
            <h6>Kategorien</h6>
            <ul className='nav navbar-nav categories-menu'>
                {
                    categories.map((category, index) =>
                        <li key={index} className="menu-item">
                            <NavLink to={category.url}>
                                {category.title}
                                {
                                    category.children &&
                                    <span className="arrow">
                                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5625 8.0625L4.0625 4.5625L0.5625 1.0625" stroke="#53A447" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                }
                            </NavLink>
                            {
                                category.children &&
                                <div className="child-menu-wrapper row">
                                    {
                                        category.children.map((child, index) =>
                                            <div key={index} className="col-3 child-menu-item">
                                                <h6>{child.heading}</h6>
                                                <ul className="nav navbar-nav sub-menu">
                                                    {
                                                        child.links.map((item, index) =>
                                                            <li key={index}>
                                                                <NavLink to={item.url}>{item.title}</NavLink>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </li>)
                }
            </ul>
        </div>
    )
}

export default CategoriesMenu