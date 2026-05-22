import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScamAlerts from '../Components/ScamAlerts'

function Home() {
  return (
    <div className='max-w-6xl mx-auto px-4'>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center py-20'
      >
        <p className='text-cyan-400 uppercase tracking-[0.3em] font-semibold'>Secure your online world</p>
        <h1 className='text-5xl md:text-6xl font-bold leading-tight mt-4'>
          Detect Scams Before
          <span className='text-cyan-400'> They Detect You</span>
        </h1>

        <p className='mt-6 text-slate-400 text-xl max-w-3xl mx-auto'>
          Protect yourself from phishing, fake news, and online fraud with real-time scanning,
          link verification, and AI-powered threat insights.
        </p>

        <div className='mt-8 flex flex-col gap-4 items-center md:flex-row md:justify-center'>
          <Link to='Scanner'>
            <button
              className='bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl text-black font-bold'
            >
              Start Scanning
            </button>
          </Link>
          <Link to='Scanner'>
            <button className='px-8 py-4 rounded-2xl border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white transition duration-300'>
              Try Demo Scan
            </button>
          </Link>
        </div>
      </motion.div>

      <section className='grid md:grid-cols-2 gap-6 mt-10'>
        <div className='bg-slate-900 p-8 rounded-3xl border border-slate-800'>
          <h2 className='text-3xl font-bold'>Why trust Verifyke?</h2>
          <p className='text-slate-400 mt-4'>
            Get fast, transparent results across messages, links, and headlines.
            Stay a step ahead of scams with continuous monitoring and smart alerts.
          </p>

          <div className='grid gap-4 mt-8'>
            <div className='flex items-start gap-4'>
              <div className='mt-1 h-10 w-10 rounded-2xl bg-cyan-500 grid place-items-center font-bold text-black'>1</div>
              <div>
                <h3 className='text-xl font-semibold'>Scan text and links</h3>
                <p className='text-slate-400 mt-2'>Paste suspicious content or URLs and get an immediate risk score.</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='mt-1 h-10 w-10 rounded-2xl bg-cyan-500 grid place-items-center font-bold text-black'>2</div>
              <div>
                <h3 className='text-xl font-semibold'>Review detailed warnings</h3>
                <p className='text-slate-400 mt-2'>See why content is flagged and receive actionable safety tips.</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='mt-1 h-10 w-10 rounded-2xl bg-cyan-500 grid place-items-center font-bold text-black'>3</div>
              <div>
                <h3 className='text-xl font-semibold'>Stay protected daily</h3>
                <p className='text-slate-400 mt-2'>Check in anytime and keep your online activity safer with confidence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <motion.div
            whileHover={{ y: -8 }}
            className='bg-slate-900 p-6 rounded-3xl border border-slate-800'
          >
            <h2 className='text-2xl font-bold'>Scam Detection</h2>
            <p className='text-slate-400 mt-4'>Analyze suspicious messages instantly with smart text scanning.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className='bg-slate-900 p-6 rounded-3xl border border-slate-800'
          >
            <h2 className='text-2xl font-bold'>URL Safety</h2>
            <p className='text-slate-400 mt-4'>Scan dangerous links before opening them and avoid phishing traps.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className='bg-slate-900 p-6 rounded-3xl border border-slate-800'
          >
            <h2 className='text-2xl font-bold'>Fake News</h2>
            <p className='text-slate-400 mt-4'>Verify headlines and viral claims with credibility checks.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className='bg-slate-900 p-6 rounded-3xl border border-slate-800'
          >
            <h2 className='text-2xl font-bold'>Live Monitoring</h2>
            <p className='text-slate-400 mt-4'>Keep tabs on threat trends and receive alerts for emerging scam tactics.</p>
          </motion.div>
        </div>
      </section>

      <section className='mt-14 bg-slate-950 border border-slate-800 rounded-3xl p-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <h2 className='text-3xl font-bold'>Protect more than just your inbox</h2>
            <p className='text-slate-400 mt-4 max-w-2xl'>From phishing attempts to suspicious websites, Verifyke gives you all the tools needed to keep your digital life secure.</p>
          </div>
          <div className='grid grid-cols-3 gap-4 text-center'>
            <div>
              <p className='text-3xl font-bold text-cyan-400'>98%</p>
              <p className='text-slate-400 mt-2'>Detection Accuracy</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-cyan-400'>24/7</p>
              <p className='text-slate-400 mt-2'>Threat Monitoring</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-cyan-400'>100k+</p>
              <p className='text-slate-400 mt-2'>Safeguarded URLs</p>
            </div>
          </div>
        </div>
      </section>

      <ScamAlerts />
    </div>
  )
}

export default Home