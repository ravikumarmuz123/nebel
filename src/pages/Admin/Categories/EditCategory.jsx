import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const EditCategory = ({ cat, onSave }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button variant="primary btn-sm" className="me-2" onClick={() => setShow(true)}><i className="bi bi-pencil"></i></Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" className="form-control" id="image" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditCategory