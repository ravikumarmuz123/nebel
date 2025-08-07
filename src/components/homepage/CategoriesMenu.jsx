import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CategoriesMenu.css'
import { getAllCategories } from '../../api/categoryApi'

const CategoriesMenu = () => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            const response = await getAllCategories();
            setCategories(response.data)
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="categories-menu-wrapper">
            <h6>Kategorien</h6>
            <ul className='nav navbar-nav categories-menu'>
                {
                    categories.map((category, index) =>
                        <li key={index} className="menu-item">
                            <NavLink to={`/product-list/${category.slug}`}>
                                {category.name}
                                {
                                    category.children.length > 0 &&
                                    <span className="arrow">
                                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5625 8.0625L4.0625 4.5625L0.5625 1.0625" stroke="#53A447" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                }
                            </NavLink>
                            {
                                Array.isArray(category.children) && category.children.length > 0 && (
                                    <div className="child-menu-wrapper row">
                                        {
                                            category.children.map((child, index) =>
                                                <div key={index} className="col-3 child-menu-item">
                                                    <h6>{child.name}</h6>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }

                        </li>)
                }
            </ul>
        </div>
    )
}

export default CategoriesMenu