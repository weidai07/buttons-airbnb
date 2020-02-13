import React from 'react';
import Background from './Background';
import CheckIn from './CheckIn';
import NavigationBar from './NavigationBar';

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

function FrontPage(){
    return (
        <div>
            <NavigationBar></NavigationBar> 
            <Background/>           
            <CheckIn></CheckIn>
        </div>
    );    
}

export default FrontPage;