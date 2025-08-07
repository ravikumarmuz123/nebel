import React, { useEffect, useState } from 'react'
import './FeaturedBrandsGrid.css'
import { getAllBrands } from '../../api/brandApi';

const FeaturedBrandsGrid = () => {
    const [brands, setBrands] = useState([]);

    const fetchBrands = async () => {
        try {
            const response = await getAllBrands();
            setBrands(response.data);
        } catch (err) {
            setError('Failed to load brands');
        }
    }
    useEffect(() => {
        fetchBrands();
    }, []);
    return (
        <div className="brand-grid">
            {/* First row with 5 items */}
            <div className="d-flex align-items-center justify-content-between column-gap-5 row-gap-3 mb-5">
                {brands.slice(0, 5).map((brand, index) => (
                    <div className="brand-item" key={index}>
                        <img src={`${import.meta.env.VITE_SERVER_URL}${brand.image}`} alt="" />
                    </div>
                ))}
            </div>

            {/* Remaining rows with 3 items each */}
            {Array.from({ length: Math.ceil((brands.length - 5) / 3) }).map((_, rowIndex) => {
                const start = 5 + rowIndex * 3;
                const end = start + 3;
                const rowBrands = brands.slice(start, end);

                const isNotLastRow = rowIndex < (Math.ceil((brands.length - 5) / 3)) - 1;

                return (
                    <div className={`d-flex align-items-center justify-content-evenly column-gap-5 row-gap-3 ${isNotLastRow ? 'mb-5' : ''}`} key={rowIndex}>
                        {rowBrands.map((brand, index) => (
                            <div className="brand-item" key={index}>
                                <img src={`${import.meta.env.VITE_SERVER_URL}${brand.image}`} alt="" />
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>

    )
}

export default FeaturedBrandsGrid