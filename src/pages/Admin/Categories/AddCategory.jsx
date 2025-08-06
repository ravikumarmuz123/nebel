import React from 'react'
import PrimaryCategoryForm from './PrimaryCategoryForm'
import SecondaryCategoryForm from './SecondaryCategoryForm'

const AddCategory = () => {
    return (
        <div className="page page-add-category">
            <div class="d-flex justify-content-between mb-3 top-taskbar"><h2 class="page-title">Add new category</h2></div>
            <div className="row g-25px">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <ul class="nav nav-tabs mb-3">
                                <li class="nav-item">
                                    <a class="nav-link active" id='primary' data-bs-toggle="tab" role="tab" data-bs-target="#primaryContent" aria-current="page" href="#">Primary</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id='secondary' data-bs-toggle="tab" role="tab" data-bs-target="#secondaryContent" href="#">Secondary</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="primaryContent" role="tabpanel" aria-labelledby="primary">
                                    <PrimaryCategoryForm />
                                </div>
                                <div class="tab-pane fade" id="secondaryContent" role="tabpanel" aria-labelledby="secondary">
                                    <SecondaryCategoryForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory