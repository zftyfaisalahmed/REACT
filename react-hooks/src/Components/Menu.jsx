import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-success'>
        <div className="container">
            <NavLink className='navbar-brand'>React Hooks</NavLink>
        
            <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#menu'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="collapse navbar-collapse" id='menu'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <NavLink to={"/Ex1"} className='nav-link'>Ex1</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex2"} className='nav-link'>Ex2</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex3"} className='nav-link'>Ex3</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex4"} className='nav-link'>Ex4</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex5"} className='nav-link'>Ex5</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex6"} className='nav-link'>Ex6</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex7"} className='nav-link'>Ex7</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex8"} className='nav-link'>Ex8</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/Ex9"} className='nav-link'>Ex9</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu