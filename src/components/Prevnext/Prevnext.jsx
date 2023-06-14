import React from 'react';
import  {Link} from "react-router-dom"
import "./Prevnext.css"
const Prevnext = () => {
  return (
    <div className='maindivv'>
        <div>
            <a className='previous' href='/'> PREVIOUS</a>
        </div>
        <div><a href='/' className='all'>ALL PRODUCTIONS</a></div>
        <div><a href='/' className='next'>NEXT</a></div>
      
    </div>
  )
}

export default Prevnext
