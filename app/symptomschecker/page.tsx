import React from 'react'
import Appheader from '../components/AppHeader'
import Navbar from '../components/NavBar'
import Link from 'next/link'
import SymptomForm from '../components/SymptomForm'

const SymptomChecker = () => {
  return (
    <div>
      <div className='mx-24'>
      <SymptomForm />
      </div>
    </div>
    
  )
}

export default SymptomChecker
