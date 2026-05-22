import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function LayoutPage({ children }) {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navbar />

      <div className='p-6'>
        {children}
      </div>

      <Footer/>
    </div>
  )
}

export default LayoutPage
