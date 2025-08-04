import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedProductsSlider.css'
import { featuredProducts } from '../../assets/assetsManager'

const FeaturedProductsSlider = () => {
    return (
        <div id="featureProductSlider" className="carousel slide">
            <div className="carousel-indicators">
                {
                    featuredProducts.map((product, index) => {
                        return (
                            <button type="button" data-bs-target="#featureProductSlider" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                        )
                    })
                }
            </div>
            <div className="carousel-inner">
                {
                    featuredProducts.map((product, index) => {
                        return (
                            <div className={`carousel-item position-relative ${index === 0 ? "active" : ""}`}>
                                <img src={product.image} className="d-block w-100" alt="..." />
                                <div className="content">
                                    <h2>{product.title}</h2>
                                    <Link to={product.url} className='cta-button'>Bestellen Sie jetzt</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProductsSlider