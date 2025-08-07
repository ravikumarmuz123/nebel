import React, { useState, useRef } from 'react';
import { createBrand } from '../../../api/brandApi';
import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';

const BrandAddForm = ({ onAdd }) => {
    const [show, setShow] = useState(false);
    const [brand, setBrand] = useState({ name: '' });
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        setBrand({ ...brand, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
            if (!validTypes.includes(file.type)) {
                toast.error('Please select a valid image file (JPEG, PNG, GIF, WebP).');
                e.target.value = '';
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error('Image size should be less than 5MB.');
                e.target.value = '';
                return;
            }

            setImageFile(file);
        }
    };

    const resetForm = () => {
        setBrand({ name: '' });
        setImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const saveBrand = async () => {

        setLoading(true);

        const formData = new FormData();
        formData.append('name', brand.name.trim());
        formData.append('image', imageFile);

        try {
            await createBrand(formData);
            resetForm();
            setShow(false);
            if (onAdd) {
                onAdd();
            }
            toast.success('Brand added successfully.');
        } catch (err) {
            console.error('Error creating brand:', err);

            // Handle different error scenarios
            if (err.response) {
                // Server responded with error status
                const errorMessage = err.response.data?.message || 'Failed to add brand.';
                toast.error(errorMessage);
            } else if (err.request) {
                // Request was made but no response received
                toast.error('Network error. Please check your connection.');
            } else {
                // Something else happened
                toast.error('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button variant='primary' onClick={() => setShow(true)}>Add New Brand</Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="brandName" className="form-label">
                                Brand Name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="brandName"
                                placeholder="Enter brand name"
                                onChange={handleInputChange}
                                value={brand.name}
                                disabled={loading}
                                maxLength={100}
                            />
                            <div className="form-text">
                                {brand.name.length}/100 characters
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="brandImage" className="form-label">
                                Brand Image <span className="text-danger">*</span>
                            </label>
                            <input
                                ref={fileInputRef}
                                type="file"
                                className="form-control"
                                name="image"
                                id="brandImage"
                                onChange={handleFileChange}
                                accept="image/*"
                                disabled={loading}
                            />
                            <div className="form-text">
                                Supported formats: JPEG, PNG, GIF, WebP. Max size: 5MB.
                            </div>
                        </div>

                        {/* Image Preview */}
                        {imageFile && (
                            <div className="mb-3">
                                <label className="form-label">Preview:</label>
                                <div className="text-center">
                                    <img
                                        src={URL.createObjectURL(imageFile)}
                                        alt="Brand preview"
                                        style={{
                                            maxWidth: '200px',
                                            maxHeight: '200px',
                                            objectFit: 'cover',
                                            border: '1px solid #dee2e6',
                                            borderRadius: '0.375rem'
                                        }}
                                        className="img-thumbnail"
                                    />
                                    <div className="mt-2">
                                        <small className="text-muted">
                                            {imageFile.name} ({(imageFile.size / 1024 / 1024).toFixed(2)} MB)
                                        </small>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    <Button
                        variant="primary"
                        onClick={saveBrand}
                        disabled={loading || !brand.name.trim() || !imageFile}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BrandAddForm;