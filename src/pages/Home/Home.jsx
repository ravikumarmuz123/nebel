import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import CategoriesMenu from '../../components/homepage/CategoriesMenu'
import FeaturedCategories from '../../components/homepage/FeaturedCategories'
import FeaturedProductsSlider from '../../components/homepage/FeaturedProductsSlider'
import FeaturedBrandsGrid from '../../components/homepage/FeaturedBrandsGrid'
import CategoriesGrid from '../../components/homepage/CategoriesGrid'

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
                    <section className="section section-featured-brands mb-120px">
                        <h2 className="section-title text-center mb-5">Firmen</h2>
                        <FeaturedBrandsGrid />
                    </section>
                    <section className="section section-categories-grid mb-120px">
                        <h2 className="section-title text-center mb-5">Unsere Kategorien</h2>
                        <CategoriesGrid />
                    </section>
                    <section className="section section-about-nebel">
                        <h2 className="section-title">nebel: Eine Reise zu drucktechnischen und buchbinderischen Spitzenleistungen buchbinderischen Spitzenleistungen</h2>
                        <p>Lorem ipsum dolor Dummy Content Dolor Amet Sit Consectur ist einfach Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist der Standard-Dummy-Text der Branche. Lorem ipsum dolor Dummy Content Dolor Amet Sit Consectur ist einfach Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist der Standard-Dummy-Text der Branche. Lorem ipsum dolor Dummy Content Dolor Amet Sit Consectur ist einfach Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist der Standard-Dummy-Text der Branche.</p>
                        <p>Lorem ipsum dolor Dummy Content Dolor Amet Sit Consectur ist einfach Blindtext der Druck- und Satzindustrie. Lorem Ipsum ist der Standard-Dummy-Text der Branche. Lorem ipsum dolor Dummy-Inhalt dolor amet sit consectur ist einfach Dummy-Text</p>
                        <div className="mt-4">
                            <Link to="/about-us" className="cta-button button-hover">mehr über das Unternehmen erfahren</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home