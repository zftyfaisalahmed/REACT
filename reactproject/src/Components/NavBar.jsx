import React from 'react'

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg row">
            <div className="container-fluid col-sm-10">
                <a className="navbar-brand" href="http://localhost:3000/"><img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-cool-red-wings-logo-png-image_7129340.png" alt="" className='image' /></a>
                <button className="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" href="http://localhost:3000/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="http://localhost:3000/">Link</a></li>
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="http://localhost:3000/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Find More</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="http://localhost:3000/">Action</a></li>
                        <li><a class="dropdown-item" href="http://localhost:3000/">Games</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="http://localhost:3000/">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item"><a class="btn btn-outline-secondary" href='http://localhost:3000/'>Disabled</a></li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" />
                    <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav