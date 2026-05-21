import React from 'react'

function Stats() {
  return (
    <div className='grid md:grid-cols-3 gap-6 mt-16'>

      <div className='bg-slate-900 p-6 rounded-3xl border border-slate-800'>
        <h2 className='text-4xl font-bold text-cyan-400'>1,240+</h2>
        <p className='text-slate-400 mt-2'>Messages Scanned</p>
      </div>

      <div className='bg-slate-900 p-6 rounded-3xl border border-slate-800'>
        <h2 className='text-4xl font-bold text-red-400'>340+</h2>
        <p className='text-slate-400 mt-2'>Scams Detected</p>
      </div>

      <div className='bg-slate-900 p-6 rounded-3xl border border-slate-800'>
        <h2 className='text-4xl font-bold text-green-400'>720+</h2>
        <p className='text-slate-400 mt-2'>Safe Links Verified</p>
      </div>

    </div>
  )
}

export default Stats