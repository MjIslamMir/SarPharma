import React from 'react';
import './home.css';
import med from './medicine.png';
import Mission from './Mission';
import Aboutpart from './Aboutpart';
const Home = () => {
    return (
        <div>
        <div className='homeComponent'>
            <div className='aboutIm'>
                <img src={med} alt="Missing value" />
            </div>
            <div className='aboutDesc'>
                <h3>Welcome To</h3>
                <h1>SAR PHARMACEUTICALS Distributors</h1>
                <div>Sar pharmaceutical distributors established and registered in 2007 with its office 
                    and distribution store at Karan Nagar Srinagar 
                    is a partnership firm dealing in distribution of medicines of 
                    fourteen national/multinational pharmaceutical companies as super stockiest/ stockiest 
                    for the last 15 years. The annual turnover during the last financial year was about Rs 30 crores
                     which is likely to touch a figure of about Rs 50 crores in 2023-2024.</div>
            </div>
        </div>
        <Mission/>
        <Aboutpart/>
        </div>

    );
};

export default Home;