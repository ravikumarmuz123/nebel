import React from 'react'
import { featuredCategoryImages } from '../../assets/assetsManager'

const FeaturedCategories = () => {
    return (
        <div className="featured-categories-grid row gy-25px gx-20px">
            <div className="col-md-5 col-lg-4">
                <div className="row gy-25px">
                    <div className='col-12'><img src={featuredCategoryImages.img1} className='img-fluid' alt="" /></div>
                    <div className='col-12'><img src={featuredCategoryImages.img3} className='img-fluid' alt="" /></div>
                </div>
            </div>
            <div className="col-md-7 col-lg-8">
                <div className="row gy-25px">
                    <div className='col-12'><img src={featuredCategoryImages.img2} className='img-fluid' alt="" /></div>
                    <div className='col-12'><img src={featuredCategoryImages.img4} className='img-fluid' alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategories