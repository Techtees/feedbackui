import React from 'react';
import Spinnerimg from '../assets/spinner.gif';


function Spinner () {
    return (
        <img
            src={Spinnerimg} 
            alt = 'isLoading.....' 
            style={{width:'100px', margin:'auto', display:'block'}} 
         />
    )
}

export default Spinner