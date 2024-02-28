import React from 'react';
import './App.css';
import award_1 from './assets/award_1.png';
import award_2 from './assets/award_2.png';
import machine from './assets/machine.png';

const AwardDetails = () => {
    return (
        <>
        <div className="award-details">
            <img className="award-images" src={award_1} alt="award" />
            <div className='container-bio'>
                <h2> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
                <ul>
                    <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img className="award2-image" src={award_2} alt="award" />
                <p>
                    Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
            </div>
        </div>
        
        <div className="container-info">
            <h5> INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h5>
            <img className="machine-image" src={machine} alt="Machine" />
            <h6>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h6>
        </div>

        <hr className="hr" />

        <div className='details'>
            <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </h4>
            <h5>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</h5>
        </div>
        </>
    );
};

export default AwardDetails;
