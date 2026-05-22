import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-slate-800'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>

        <div className='flex items-center gap-2'>
          <ShieldCheck size={30} className='text-cyan-400' />
          <h1 className='text-2xl font-bold'>VerifyKE</h1>
        </div>

        <div className='flex gap-6 text-slate-300'>
          <Link to='/'>Home</Link>
          <Link to='/scanner'>Scanner</Link>
          <Link to='/news'>News</Link>
           <Link to='/about'>About</Link>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar