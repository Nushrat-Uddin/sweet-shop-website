import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    const iconstyle1={
        marginRight:'10px',
        marginLeft:'30px'
    }
    const iconstyle2={
        marginRight:'10px',
        marginLeft:'15px'
        
    }
    const iconstyle3={
        marginRight:'230px',
        marginLeft:'15px'
        
    }

    
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
           
           <nav className='navbar'>
            <h3 className='nav-h3'>
               <i style={iconstyle1} class="fab fa-facebook-f"></i>
               <i style={iconstyle2} class="fab fa-twitter"></i>
               <i style={iconstyle2} class="fab fa-instagram"></i>
               <i style={iconstyle3} class="fab fa-pinterest-p"></i>
           FREE SHIPPING ON US CONTINENTAL ORDERS OVER $10000</h3>
           </nav>
            
        </div>
    );
};

export default Header;