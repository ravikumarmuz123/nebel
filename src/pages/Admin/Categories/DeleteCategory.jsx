import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'

const DeleteCategory = ({ cat, onSave }) => {
    const [show, setShow] = useState(false);
    const deleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/categories/delete/${id}`)
            toast.success('Category deleted successfully')
            onSave();
        } catch (error) {
            toast.error('Failed to delete category')
            console.error('Failed to delete category:', error);
        } finally {
            setShow(false);
        }
    }

    return (
        <>
            <Button variant="outline-danger btn-sm" className="me-2" onClick={() => setShow(true)}><i className="bi bi-trash"></i></Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>
                        <h5>{`Delete ${cat.name}`}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this category?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary btn-sm" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger btn-sm" onClick={() => deleteCategory(cat._id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteCategory