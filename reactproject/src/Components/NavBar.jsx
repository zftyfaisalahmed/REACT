import React from 'react'

function Nav(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/"><img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-cool-red-wings-logo-png-image_7129340.png" alt="" className='image' /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://localhost:3000/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="http://localhost:3000/">Action</a></li>
                        <li><a class="dropdown-item" href="http://localhost:3000/">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="http://localhost:3000/">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true" href='http://localhost:3000/'>Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav
