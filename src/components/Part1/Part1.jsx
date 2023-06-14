import React from 'react';
import "./part1.css"
import img from "../../images/people_image.jpg"

const Part1 = () => {
  return (
    <div className='maindiv'>
      <div className='leftdiv'>
        <div className='subleftdiv'>
          <p className='date'> 30 JUNE - 13 AUG  | 2022</p>
          <h2 className='redemp'>REDEMPTION</h2>
        </div>
      </div>
      <div className='rightdiv'>
        <img className='part1image' src={img} alt='img not available'></img>
      </div>
    </div>
  );
}

export default Part1
