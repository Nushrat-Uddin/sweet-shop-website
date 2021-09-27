import React from 'react';
import './Footer.css';

const Footer = () => {
    const iconstyle1={
        marginLeft:'572px',
        marginRight:'20px',
        marginTop:'30px',
        color:'white',
        fontSize:'25px'
    }
    const iconstyle2={
        marginLeft:'20px',
        marginRight:'20px',
        marginTop:'40px',
        color:'white',
        fontSize:'25px'
    }
    return (
        <div>
                <footer className='foot'>
                    <i style={iconstyle1} class="fab fa-facebook-f"></i>
                    <i style={iconstyle2} class="fab fa-twitter"></i>
                    <i style={iconstyle2} class="fab fa-instagram"></i>
                    <i style={iconstyle2} class="fab fa-pinterest-p"></i>
                    <h5 className='copyright'><i class="far fa-copyright"></i>2010–2020 Sweets & Treats Boutique. All rights reserved.</h5>
                </footer> 
        </div>
    );
};

export default Footer;