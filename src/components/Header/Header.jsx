import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
export default function Header() {
    return (
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink 
                className="navbar-brand" 
                to="/" 
            >CyberSoft
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <NavLink 
                    exact 
                    className="nav-link" 
                    to="/home" 
                    activeClassName="activeMenuItem"
                    activeStyle={{fontWeight:'bold'}}
                >Home
                </NavLink>
                </li>

                <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/about" 
                    activeClassName="activeMenuItem"
                    activeStyle={{fontWeight:'bold'}}>About
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/hoc" 
                    activeClassName="activeMenuItem"
                    activeStyle={{fontWeight:'bold'}}>HOC
                    </NavLink>
                </li>

                <li className="nav-item dropdown">
                <NavLink 
                className="nav-link" 
                to="/contact" 
                activeClassName="activeMenuItem"
                activeStyle={{fontWeight:'bold'}}>
                    Contact
                </NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink 
                className="nav-link" 
                to="/login" 
                activeClassName="activeMenuItem"
                activeStyle={{fontWeight:'bold'}}>
                    Login
                </NavLink>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
</div>

    )
}
