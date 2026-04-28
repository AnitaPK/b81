import React, { useContext, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaToggleOff,FaToggleOn } from "react-icons/fa6";
import { ThemeContext } from '../Theme/ThemeProvider';

const Navbar = ({ loggedUser }) => {
    // const [theme,setTheme] = useState('dark')
    const {theme,toggleTheme} = useContext(ThemeContext)
    return (
        <nav 
        className={`navbar navbar-expand-lg fixed-top ${theme == 'light' ?'bg-light' : 'bg-dark'}`} 
        data-bs-theme={`${theme == 'light' ?'light':'dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Savana</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                    </ul>
                    <div 
                    className={`d-flex ${theme=='light'? 'text-dark': 'text-light'}`}
                    role="search"
                    >
                        <i className='me-4'>Welcome, {loggedUser.userName}</i>
                        <span><FaShoppingCart /><sup className='badge badge-pill badge-danger me-4'></sup></span>
                        <button onClick={()=>toggleTheme()}>
                            {theme == "light" ? <FaToggleOff /> : <FaToggleOn />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar