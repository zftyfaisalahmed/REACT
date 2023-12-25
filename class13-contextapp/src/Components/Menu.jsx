import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <NavLink to={"/"} className="navbar-brand">React Context</NavLink>

            <button type="button" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='menu'>
                <ul className='navbar-nav ms-auto'>
                    <li className='navbar-item'>
                        <NavLink to={'/'} className='nav-link'>Home</NavLink>
                    </li>
                    <li className='navbar-item'>
                        <NavLink to={'/users'} className='nav-link'>Users</NavLink>
                    </li>
                    <li className='navbar-item'>
                        <NavLink to={'/post'} className='nav-link'>Post</NavLink>
                    </li>
                    <li className='navbar-item'>
                        <NavLink to={'/comment'} className='nav-link'>Comment</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu