import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCategories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [deletingId, setDeletingId] = useState(null);


    const getCategories = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:4000/api/categories')
            setCategories(response.data)
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        } finally {
            setLoading(false)
        }
    }

    const deleteCategory = async (id) => {
        if (!window.confirm('Are you sure you want to delete this category?')) return;
        setDeletingId(id);
        try {
            await axios.delete(`http://localhost:4000/api/categories/delete/${id}`)
            toast.success('Category deleted successfully')
            getCategories()
        } catch (error) {
            toast.error('Failed to delete category')
            console.error('Failed to delete category:', error);
        } finally {
            setDeletingId(null);
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
                        <Link to={`/admin/categories/edit/${cat._id}`} className="btn btn-sm btn-outline-primary me-2">
                            <i className="bi bi-pencil"></i>
                        </Link>
                        <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => deleteCategory(cat._id)}
                            disabled={deletingId === cat._id}
                        >
                            {
                                deletingId === cat._id ? (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                ) : (
                                    <i className="bi bi-trash"></i>
                                )
                            }
                        </button>
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
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                                <input className="form-control w-50" type="search" name="search" id="" placeholder="Search Categories" />
                                <Link to="/admin/categories/add" className="btn btn-primary">
                                    <i className="bi bi-plus-circle"></i>
                                    <span className="ms-2">Add</span>
                                </Link>
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
            </div>
        </div>
    )
}

export default ProductCategories