import React from 'react';
import background from '../image/background.jpg';

function Background(){
const backgroundStyle = {
    // minHeight: '100%',
    // minWidth: '1024px',

    /* Set up proportionate scaling */
    width: '100%',
    height: '100%',

    /* Set up positioning */
   
    zIndex: '-1',
    backgroundSize:'cover'
   
}

    return (
    <div>
      <img src={background} style={backgroundStyle}/>
    </div>
    );    
}

export default Background;