import React from 'react'
import { categories } from '../../assets/assetsManager'

const ProductFilterForm = () => {
  return (
    <div className='product-filter-form'>
        <form id='productFilter' style={{maxWidth: '250px'}}>
            <h6>Kategorien</h6>
            {
                categories.map((category, index) => (
                    <div key={index} className="form-check ps-0">
                        <input className="form-check-input visually-hidden" name="category" type="radio" value={category.title} id={`flexCheckDefault${index}`} />
                        <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                            {category.title}
                        </label>
                    </div>
                ))
            }
            <hr className="border-top border-secondary my-4" />
            <h6>Farbe</h6>
        </form>
    </div>
  )
}

export default ProductFilterForm