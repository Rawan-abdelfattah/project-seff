import React from 'react';
import './Background.css';
import {Card,Button} from 'react-bootstrap';
import itlogo from "./it.jpg"
import Jobs from "../Jobs/Jobs.js"

const Background = () => {
  return (
    <div className='background position-relative'>
    
        <div className='background-overlay position-absolute top-0 start-0 bottom-0 end-0'></div>
        <Jobs/>
        <Jobs/>
        <Jobs/>
</div>
  
  )
}
export default Background;
