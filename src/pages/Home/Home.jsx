import React from 'react'
import './Home.css'
import CategoriesMenu from '../../components/homepage/CategoriesMenu'
import FeaturedCategories from '../../components/homepage/FeaturedCategories'
import FeaturedProductsSlider from '../../components/homepage/FeaturedProductsSlider'
import FeaturedBrandsGrid from '../../components/homepage/FeaturedBrandsGrid'

const Home = () => {
    return (
        <div className="page">
            <div className="homepage__hero_section">
                <div className="container">
                    <div className="row gx-20px gy-25px">
                        <div className="col-3">
                            <CategoriesMenu />
                        </div>
                        <div className="col-lg-9">
                            <FeaturedCategories />
                        </div>
                        <div className="col-12">
                            <FeaturedProductsSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-120px">
                <div className="container">
                    <section className="section section-featured-brands">
                        <h2 className="section-title text-center mb-5">Firmen</h2>
                        <FeaturedBrandsGrid />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home