import React, { useState } from 'react'
import { categories } from '../../../assets/assetsManager'
import { Link } from 'react-router-dom'

const ProductCategories = () => {

    return (
        <div className='page page-categories'>
            <div className="d-flex justify-content-between mb-3 top-taskbar">
                <h2 className="page-title">Categories</h2>
            </div>
            <div className="row g-20px">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                                <input className="form-control w-50" type="search" name="search" id="" placeholder="Search Categories" />
                                <Link to="/admin/categories/add" className="btn btn-primary">
                                    <i className="bi bi-plus-circle"></i>
                                    <span className="ms-2">Add</span>
                                </Link>
                            </div>
                            {
                                categories.map((category, index) => (
                                    <div key={index} className="product-category-item">
                                        <div className="mb-3">
                                            <p>{category.title}</p>
                                            {
                                                category.children &&
                                                <ul className="secondary-category">
                                                    {
                                                        category.children.map((child, index) => (
                                                            <li key={index}>
                                                                {child.heading}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories