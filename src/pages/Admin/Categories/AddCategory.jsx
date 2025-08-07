import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';

const AddCategory = ({ onAdd }) => {
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([{ name: '', parent: '' }]);
    const [allCategories, setAllCategories] = useState([]);

    // Fetch existing categories for parent dropdown
    useEffect(() => {
        axios.get('http://localhost:4000/api/categories')
            .then(res => {
                const flat = flattenCategories(res.data);
                setAllCategories(flat);
            })
            .catch(err => console.error(err));
    }, []);

    const flattenCategories = (categories, prefix = '') => {
        return categories.reduce((acc, cat) => {
            acc.push({ _id: cat._id, name: prefix + cat.name });
            if (cat.children?.length > 0) {
                acc.push(...flattenCategories(cat.children, prefix + '--'));
            }
            return acc;
        }, []);
    };

    const addCategoryField = () => {
        setCategories([...categories, { name: '', parent: '' }]);
    };

    const removeCategoryField = (index) => {
        const updated = [...categories];
        updated.splice(index, 1);
        setCategories(updated);
    };

    const handleChange = (index, field, value) => {
        const updated = [...categories];
        updated[index][field] = value;
        setCategories(updated);
    };

    const handleSubmit = async () => {
        try {
            await Promise.all(
                categories.map(cat =>
                    axios.post('http://localhost:4000/api/categories/add', {
                        name: cat.name,
                        parent: cat.parent || null
                    })
                )
            );
            toast.success('Categories added successfully.');
            setCategories([{ name: '', parent: '' }]);
            onAdd();
            setShow(false);
        } catch (err) {
            console.error(err);
            toast.error('Failed to add categories.');
        }
    };

    return (
        <>
            <Button variant="primary" className="me-2" onClick={() => setShow(true)}>Add New Category</Button>
            <Modal centered size='lg' show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        {categories.map((cat, index) => (
                            <div className="row g-2 mb-3" key={index}>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Category Name"
                                        value={cat.name}
                                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-5">
                                    <select
                                        className="form-select"
                                        value={cat.parent}
                                        onChange={(e) => handleChange(index, 'parent', e.target.value)}
                                    >
                                        <option value="">Main Category</option>
                                        {allCategories.map((parentCat) => (
                                            <option key={parentCat._id} value={parentCat._id}>
                                                {parentCat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-1 d-flex align-items-center">
                                    {index > 0 && (
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => removeCategoryField(index)}
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="mb-3">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={addCategoryField}
                            >
                                + Add Another
                            </button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddCategory;
