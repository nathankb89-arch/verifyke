import React from 'react'
import Navbar from '../components/Navbar'

function LayoutPage({ children }) {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Navbar />

      <div className='p-6'>
        {children}
      </div>
    </div>
  )
}

export default LayoutPage
