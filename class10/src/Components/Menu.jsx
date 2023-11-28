import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='navbar navbar-expand-md navbar-dark bg-secondary'>
        <div className="container">
            <NavLink className='navbar-brand'>CRUD APP</NavLink>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon">
                </span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link'>Registers</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu