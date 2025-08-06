import React from 'react'

const SecondaryCategoryForm = ( { handleSubmit } ) => {
    return (
        <form>
            <div className="mb-3">
                <select className="form-select" name="primary-category" id="primary-category">
                    <option value="primary-category-1">Primary Category 1</option>
                    <option value="primary-category-2">Primary Category 2</option>
                    <option value="primary-category-3">Primary Category 3</option>
                </select>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name='title'
                    placeholder='Category Name'
                    className='form-control'
                />
            </div>
            <div className="mb-3">
                <input type="text" name='slug' placeholder='Slug' className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </form>
    )
}

export default SecondaryCategoryForm