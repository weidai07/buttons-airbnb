import React from 'react';
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

function CheckInRequest(props){
  return (
    <div style={backgroundStyle}>
         <NavigationBar /> 
      <p>Would you like to make a new check In?</p>
      <button onClick={props.onCheckInRequest}>Yes</button>
    </div>
  );
}

CheckInRequest.propTypes = {
  onCheckInRequest: PropTypes.func
};

export default CheckInRequest;