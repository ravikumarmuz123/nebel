import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteBrand, getAllBrands } from '../../../api/brandApi';
import BrandAddForm from './BrandAddForm';
import BrandEditForm from './BrandEditForm';
import DeleteBrand from './DeleteBrand';

const BrandList = () => {
    const [brands, setBrands] = useState([]);
    const [error, setError] = useState('');

    const fetchBrands = async () => {
            try {
                const response = await getAllBrands();
                setBrands(response.data);
               
            } catch (err) {
                setError('Failed to load brands');
                
            }
        };

    useEffect(() => {
        

        fetchBrands();
    }, []);

    return (
        <div className="page page-brand-list">
            <div className="row">
                <div className="col-6">
                    <div className="d-flex justify-content-between mb-3 top-taskbar">
                        <h2 className="page-title">Brands</h2>
                        <BrandAddForm onAdd={fetchBrands}/>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Logo</th>
                                    <th>Name</th>
                                    <th style={{ width: '150px' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {brands.length === 0 ? <tr><td colSpan="3">No brands found</td></tr> : brands.map((brand, index) => (
                                    <tr key={brand._id}>
                                        <td>{index + 1}</td>
                                        <td style={{ width: '120px' }}>
                                            {brand.image && (
                                                <img
                                                    src={`${import.meta.env.VITE_SERVER_URL}${brand.image}`}
                                                    alt={brand.name}
                                                    className="img-fluid"
                                                />
                                            )}
                                            {console.log(import.meta.env.VITE_SERVER_URL)}
                                        </td>
                                        <td>{brand.name}</td>
                                        <td>
                                            <BrandEditForm brand={brand} onSave={fetchBrands} />
                                            <DeleteBrand brand={brand} onSave={fetchBrands} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BrandList;
