import React from 'react';
import './Home.css';
import ButtonTop from '../../components/ButtonTop/ButtonTop';
import Background from '../../components/Background/Background';
import Content from '../../components/HomeContent/Content';

const Home = () => {
  return (
    <section className='home'>
       <Background/>
       {/* <Content/> */}
       <ButtonTop/>
    </section>
  )
}
export default Home;
