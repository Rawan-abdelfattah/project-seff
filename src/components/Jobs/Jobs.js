import React from 'react';
import './Jobs.css'
import {Card,Button} from 'react-bootstrap';
import itlogo from "./it.jpg"
const Jobs = () => {
  return (
    <>
    <Card >
      <Card.Body>
        <div className='row'>
          <div className='col-1'>
          <img src={itlogo} className='itlogo'/>
          </div>
          <div className='col'>
          <Card.Title>Front-End Developer</Card.Title>
          <Card.Subtitle className="mb-2 ">Eptikar IT-solutions, obour city</Card.Subtitle>
          </div>
          <div className='col-3'> 
          <p></p>
          <Card.Subtitle style={{fontSize: "12px"}}>5000 EGP - 8000 EGP per month</Card.Subtitle>
          <Card.Subtitle className="mt-2 ">Onsite</Card.Subtitle>

        
          </div>
   
        </div>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. 
        </Card.Text>
        <Button className='btn-borderd'>React Js</Button>
        <Button className='btn-borderd'>Development</Button>

        <div>
          
        </div>
      </Card.Body>
    </Card>
    </>
    )}
export default Jobs;