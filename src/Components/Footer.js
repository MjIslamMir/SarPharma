import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerMain'>
            <div className='footerContact'>
                <h3>CONTACTS</h3>
                <ul>
                    <li>Email:abc@gmail.com</li>
                    <li>Tel:+91 0123456789</li>
                    <li>Twitter:</li>
                    <li>Instagram:</li>
                    <li>Facebook:</li>
                </ul>
            </div>
            <div className='footerMenu'>
                <h3>MENU</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/teams">Teams and Leadership</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
            </div>
            <div><h3>FIND US ON GOOGLE MAP</h3>
            <div id="frame">
                <iframe title ="locos" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d206.54222361259755!2d74.79777051464642!3d34.07782982080998!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDA0JzQwLjMiTiA3NMKwNDcnNTIuMiJF!5e0!3m2!1sen!2sus!4v1683269957136!5m2!1sen!2sus"  height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
            </div>

            <div className='rightsreserve'>
            © 2023 All Rights Reserved. Design by SAR Pharmaceuticals Distributors <Link to="/developer"> <pre id='mj'> Dev </pre></Link>
            </div>
        </div>
    );
};

export default Footer;