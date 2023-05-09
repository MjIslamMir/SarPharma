import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <div className='PortalTitle'>SAR Pharmaceuticals Distributors</div>
            <nav>
            <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/business">BUSINESS</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/teams">TEAMS AND LEADERSHIP</Link></li>
            <li><Link to="/contact">CONTACTS</Link></li>
            </ul>
    </nav>
        </nav>
    );
};

export default Header;