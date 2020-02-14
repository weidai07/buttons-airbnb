import React from 'react';

const logo = {

    position: 'absolute',
    top: '0',
    left: '0',
    width: '100px',
   
   }
   
   const mainNav = {
     
     
     position: 'initial',
     textDecoration: 'none',
     listStyleType: 'none',
     margin: '0',
     padding: '0',
     overflow: 'hidden',
     paddingBottom: '0px'
   
   }
   
   const link = {  
   padding: '5px',
   paddingTop: '0px',
   paddingBottom: '0px',
   textDecoration: 'none',
   position:'static',
    margin: '0',
   float: 'right',
   
   color: 'white'
   }

function NavigationBar(){
    return (
        <div>
        <img src={'https://cdn.freebiesupply.com/logos/large/2x/airbnb-2-logo-black-and-white.png'} style={logo} />
     
           <ul style={mainNav} >
               <li><a style={link} >Login</a></li>
               <li><a style={link} >Sign Up</a></li>
               <li><a style={link} >Help</a></li>
               <li><a style={link} >Host an Experience</a></li>
               <li><a style={link} >Host a Home</a></li>
               <li><a style={link}>English</a></li>
           </ul>
     </div> 
    );    
}

export default NavigationBar;