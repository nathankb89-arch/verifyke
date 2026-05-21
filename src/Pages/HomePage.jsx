import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScamAlerts from '../Components/ScamAlerts'

function Home() {
  return (
    <div className='max-w-6xl mx-auto'>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center py-20'
      >
        <h1 className='text-6xl font-bold leading-tight'>
          Detect Scams Before
          <span className='text-cyan-400'> They Detect You</span>
        </h1>

        <p className='mt-6 text-slate-400 text-xl'>
          Protect yourself from phishing, fake news and online fraud.
        </p>

        <Link to='Scanner'>
  <button
    className='
      mt-8
      bg-cyan-500
      hover:bg-cyan-400
      hover:scale-105
      transition
      duration-300
      px-8
      py-4
      rounded-2xl
      text-black
      font-bold
    '
  >
    Start Scanning
  </button>
          </Link>
      </motion.div>

      <div className='grid md:grid-cols-3 gap-6 mt-10'>

        <div className='bg-slate-900 p-6 rounded-3xl border border-slate-800'>
          <h2 className='text-2xl font-bold'>Scam Detection</h2>
          <p className='text-slate-400 mt-4'>
            Analyze suspicious messages instantly.
          </p>
        </div>

        <div className='bg-slate-900 p-6 rounded-3xl border border-slate-800'>
          <h2 className='text-2xl font-bold'>URL Safety</h2>
          <p className='text-slate-400 mt-4'>
            Scan dangerous links before opening them.
          </p>
        </div>

        <div className='bg-slate-900 p-6 rounded-3xl border border-slate-800'>
          <h2 className='text-2xl font-bold'>Fake News</h2>
          <p className='text-slate-400 mt-4'>
            Verify headlines and viral claims.
          </p>
        </div>
      </div>
      <ScamAlerts />
    </div>
  )
}

export default Home