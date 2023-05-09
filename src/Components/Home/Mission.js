import React from 'react';
import medi from './medicines.jpg';
import './mission.css';
const Mission = () => {
    return ( 
    <div className="mission">
        <div className="missionPoints">
            <h1>MISSION</h1>
            <ul>
                <li>To devote our efforts to improving the quality of healthcare Supplies</li>
                <li>To respond Promptly to the ongoing market requirements by supplying healthcare products with aim to improve health</li>
                <li>To lead the healthcare industry in Kashmir with the highest standards, ensure medical equipment and medicines meet the needs of the community today, and build capabilities to raise healthcare standards to meet the needs of future generations.</li>
            </ul>
        </div>
        <div className="missionIm">
            <img src={medi} alt="" />
        </div>
    </div> 
    );
}
 
export default Mission;