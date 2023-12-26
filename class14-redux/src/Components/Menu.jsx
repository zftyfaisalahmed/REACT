import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info">
        <div className="container">
            <NavLink to={"/"} className="navbar-brand">Redux-CRUD</NavLink>

            <button type="button" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='menu'>
                <ul className='navbar-nav ms-auto'>
                    <li className='navbar-item'>
                        <NavLink to={'/'} className='nav-link'>Home</NavLink>
                    </li>
                    <li className='navbar-item'>
                        <NavLink to={'/create'} className='nav-link'>Create</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu