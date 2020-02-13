import React from 'react';
import CheckIn from './CheckIn';
import NavigationBar from './NavigationBar';
import background from '../image/background.jpg';

// const SomeCSS={
//     margin:'0px',
//     color:'blue',
//     minHeight: '100%',
//     minWidth: '1024px',
//     height:'100%',
//     width:'100%',
//     postion:'absolute',
//     margin:'0',
//     overflow:'hidden',
//     backgroundSize:'cover',
//     backgroundImage: "url(" + 'https://free4kwallpapers.com/uploads/originals/2019/11/29/cabin-on-a-snowy-evening-wallpaper.jpg' + ")"
// }



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
    backgroundImage: "url(" + 'https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg' + ")"
   
}


function FrontPage(){
    return (
        <div style={backgroundStyle}>
            <NavigationBar></NavigationBar>   
           
            <CheckIn></CheckIn>
        </div>
    );    
}

export default FrontPage;