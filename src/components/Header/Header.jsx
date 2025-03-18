import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Header-images/Logo.png'

function Header() {
    return (
        <div>
            <header className="header">
                <nav className="header_nav">
                    <Link to="/">
                    <img src={logo} alt="" />
                    </Link>
                    <ul className='header_list'>
                        <li className='header_item'><Link to="/">Home</Link></li>
                        <li className='header_item'><Link to="/about">about</Link></li>
                        <li className='header_item'><Link to="/menu">Menu</Link></li>
                        <li className='header_item'><Link to="/pages">Pages</Link></li>
                        <li className='header_item'><Link to="contact">contact</Link></li>
                    </ul>

                    <button className="header_table"><Link to="/table">Book A Table</Link></button>
                </nav>
            </header>
        </div>
    )
}

export default Header