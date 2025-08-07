import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAllCategories } from '../../../api/categoryApi'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'
import DeleteCategory from './DeleteCategory'

const ProductCategories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)


    const getCategories = async () => {
        try {
            setLoading(true)
            const response = await getAllCategories();
            setCategories(response.data)
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCategories()

    }, [])

    const renderCategories = (cats, level = 0) => {
        return cats.map((cat, index) => (
            <React.Fragment key={cat._id}>
                <tr>
                    <td>
                        <span style={{ paddingLeft: `${level * 20}px` }}>
                            {level > 0 && '↳ '}
                            {cat.name}
                        </span>
                    </td>
                    <td>
                        <EditCategory cat={cat} onSave={getCategories} />
                        <DeleteCategory cat={cat} onSave={getCategories} />
                    </td>
                </tr>
                {cat.children && cat.children.length > 0 && renderCategories(cat.children, level + 1)}
            </React.Fragment>
        ));
    };

    return (
        <div className='page page-categories'>
            <div className="d-flex justify-content-between mb-3 top-taskbar">
                <h2 className="page-title">Categories</h2>
            </div>
            <div className="row g-20px">
                <div className="col-6">
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                        <input className="form-control w-50" type="search" name="search" id="" placeholder="Search Categories" />
                        <AddCategory onAdd={getCategories} />
                    </div>

                    <table className='table table-bordered table-hover'>
                        <thead className="table-light">
                            <tr>
                                <th>Category Name</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.length === 0 ? (
                                <tr>
                                    <td colSpan="2" className="text-center text-muted">
                                        No categories found.
                                    </td>
                                </tr>
                            ) : (
                                renderCategories(categories)
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories