import React from 'react';
import CheckIn from './CheckIn';
import PropTypes from 'prop-types';
import NavigationBar from './Navigationbar';


const backgroundStyle = {
    backgroundPosition: 'center center',
    height: '100vh',
      
    display: 'inlineBlock',
    zIndex: '-1',
    width: '100%',
    // paddingTop: '15%',
      
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    flex: 1,
    resizeMode: 'cover',
    backgroundImage: 'url(' + 'https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg' + ')'
     
  }; 

  
function ConfirmationPage(props){
  return(
    <div style={backgroundStyle}>
        <NavigationBar />
      <p>These are the confirmed check-ins</p>
      {props.confirmationPage.map((checkIn) => 
        <CheckIn where={checkIn.where}
          checkIn={checkIn.checkIn}
          checkOut={checkIn.checkOut}
          guests={checkIn.guests} 
          key={checkIn.id}/>
      )}
    </div>
  );    
}

ConfirmationPage.propTypes = {
  confirmationPage: PropTypes.array
};

export default ConfirmationPage;

//This is the page where the checkins are listed