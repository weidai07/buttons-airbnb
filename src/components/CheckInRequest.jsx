import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './Navigationbar';

function CheckInRequest(props){
  return (
    <div>
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