import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteBrand } from '../../../api/brandApi';
import { toast } from 'react-toastify';

const DeleteBrand = ({ brand, onSave}) => {
    const [show, setShow] = useState(false);

    const handleDelete = async (id) => {
        try {
            await deleteBrand(id);
            setShow(false);
            toast.success('Brand deleted successfully');
            onSave();
        } catch (err) {
            setError('Failed to delete brand');
            toast.error('Failed to delete brand');
        }
    };

    return (
        <>
            <Button variant="outline-danger btn-sm" className="me-2" onClick={() => setShow(true)}><i className="bi bi-trash"></i></Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>
                        <h5>{`Delete ${brand.name}`}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this brand?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary btn-sm" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger btn-sm" onClick={() => handleDelete(brand._id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteBrand