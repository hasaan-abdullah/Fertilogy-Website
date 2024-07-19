import React from 'react'
import Explore from '../components/Explore'
import Appheader from '../components/AppHeader'
import Exploretopics from '../components/Exploretopics'
import Footerline from '../components/footerline'
import Navbar from '../components/NavBar'

const page = () => {
    return (
        <div>
            
            <div className='mt-12'>
            <Explore/>
            </div>
            
            <Exploretopics/>
           
       
        </div>
    )
}

export default page
