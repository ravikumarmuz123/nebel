import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductFilterForm from '../../components/product/ProductFilterForm'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Search = () => {

    const [searchResults, setSearchResults] = React.useState([])
    const query = useQuery()
    const searchTerm = query.get('query') || ''

    return (
        <div className='page page-search py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h6 className='mb-5'>{`Search results for ‘${searchTerm}’`}</h6>
                        <ProductFilterForm />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex justify-content-end align-items-center gap-3 mb-4">
                            <div className="results-count">{`${searchResults.length} results`}</div>
                            <select name="sort" id="sort">
                                <option value="newest">Beste ernebgisse</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='alert alert-danger'>No results found</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search