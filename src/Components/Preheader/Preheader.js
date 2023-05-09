import React from 'react';
import "./preheader.css";
import tel from "./telephone-symbol-button.png";
import insta from "./instagram.png";
import twit from "./twitter.png";
import fb from "./fb.png";
const Preheader = () => {
    return (
        <div className='prehead'>
            <div className="call">
                <img src={tel} alt="symbol Missing" />
                <span>+91 0123456789</span>
            </div>
            <div className='socialNets'>
                <a href="blank" target='_blank'><img src={fb} alt="symbol Missing"/></a>
                <a href="blank" target='_blank'><img src={insta} alt="symbol Missing"/></a>
                <a href="blank" target='_blank'><img src={twit} alt="symbol Missing" /></a>
            </div>
            
        </div>
    );
};

export default Preheader;