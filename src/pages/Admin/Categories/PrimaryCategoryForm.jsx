import React from 'react'

const PrimaryCategoryForm = ({ handleSubmit }) => {
  return (
    <form>
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

export default PrimaryCategoryForm