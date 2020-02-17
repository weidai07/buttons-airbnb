import React from 'react';
import CheckIn from './CheckIn';
import PropTypes from 'prop-types';

function ConfirmationPage(props){
  return(
    <div>
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