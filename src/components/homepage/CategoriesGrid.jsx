import React from 'react'
import { categories } from '../../assets/assetsManager'
import { Link } from 'react-router-dom'

const CategoriesGrid = () => {
    return (
        <div className='categories-grid'>
            <div className="row g-15px">
                {
                    categories.slice(0, 12).map((category, index) => {
                        return (
                            <div className="col-6 col-md-4 col-lg-3" key={index}>
                                <div className="category-item position-relative">
                                    <Link to={`/products${category.url}`}>
                                        <img src={category.image} className='w-100 ratio-16x9 rounded' alt="" />
                                        <h5 className='position-absolute top-0 start-0 p-3 text-white'>{category.title}</h5>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoriesGrid