import React from 'react'
import Appheader from '../components/AppHeader'
import Navbar from '../components/NavBar'
import PrivacyLogo from '../components/PrivacyLogo'
import PrivacyRules from '../components/PrivacyRules'

const page = () => {
  return (
    <div>
        
        <div className=''>
        <PrivacyLogo/>
        </div>
        <PrivacyRules/>

        
    </div>
  )
}

export default page