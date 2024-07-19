import React from 'react'
import AppHeader from './components/AppHeader';
import Logoscreen from './components/Logosscreen';
import Explore from './components/Explore';
import Exploretopics from './components/Exploretopics';
import Footerline from './components/footerline';
import { Header } from './components/Header';
import Overallheader from './OverallHeader/page';

const Home = () => {
  return (
    <>
    <Overallheader />
    
    {/* <Header /> */}
    <Logoscreen/>
    {/* <Explore/>
    <Exploretopics/> */}
     </>
  
  )
}

export default Home
