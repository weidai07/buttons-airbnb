import React from 'react';
import PropTypes from 'prop-types';

function CheckInRequest(props){
  return (
    <div>
      <p>Would you like to make a new check In?</p>
      <button onClick={props.onCheckInRequest}>Yes</button>
    </div>
  );
}

CheckInRequest.propTypes = {
  onCheckInRequest: PropTypes.func
};

export default CheckInRequest;