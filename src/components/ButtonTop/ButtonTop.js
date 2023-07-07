import React,{useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import './ButtonTop.css';

const ButtonTop = () => {
const btnTopRef=useRef(null);
 useEffect(()=>{
    window.addEventListener('scroll',()=>{
    const scrollVallue=window.scrollY;
    if(scrollVallue<120){ 
        btnTopRef.current.style.display='none'; 
     }
    else{
        btnTopRef.current.style.display='block'; 
     }
   })
  },[])
  return (
    <div className='button-top' ref={btnTopRef}>
      <a href='#header'><FontAwesomeIcon icon={faAngleUp} className='up-icon text-white'/></a>
    </div>
  )
}
export default ButtonTop;
