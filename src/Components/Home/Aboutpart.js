import React from 'react';
import {Link} from 'react-router-dom';
import aboutyIm from './p-6.jpg';
import './about.css';
const Aboutpart = () => {
    return (
        <div className='aboutee'>
            <h1>ABOUT US</h1>
            <div id='description'>
                <div className='details'>
                    <img src={aboutyIm} alt="noSourcesFileAvailible" />
                    </div>
                <div className='desc'> 
                    <br />
                    <div>The firm has at present available finances of minimum Rs 5.25
                        crores which is sufficient to run the present business. The firm has
                        easy access to more availability of finances whenever required.
                        The firm has an excellent record in the JK Bank with excellent
                        credit score. There are no disputes or litigation and no complaints
                        from any quarter. The firm is in s ound position and ready to invest
                        more finances as per the requirement</div>
                    <Link to='/about'>Click to Know More</Link></div>
            </div> 
        </div>
    );
};

export default Aboutpart;