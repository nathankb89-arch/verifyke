import { useState } from 'react'


function Scanner() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const suspiciousWords = [
    'free',
    'winner',
    'urgent',
    'click',
    'password',
    'money',
    'bank',
    'claim',
  ]

  const scanMessage = () => {
  setLoading(true)

  setTimeout(() => {
    let score = 0

    suspiciousWords.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        score++
      }
    })

    if (score >= 4) {
      setResult('Dangerous Scam Detected')
    } else if (score >= 2) {
      setResult('Suspicious Message')
    } else {
      setResult('Looks Safe')
    }

    setLoading(false)
  }, 2000)
}

  return (
  <div className='max-w-4xl mx-auto'>

    <h1 className='text-5xl font-bold mb-8'>
      Scam Scanner
    </h1>

    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Paste suspicious message here...'
      className='w-full h-60 bg-slate-900 border border-slate-700 rounded-3xl p-6 text-lg outline-none'
    />

    <button
      onClick={scanMessage}
      className='
        mt-6
        bg-cyan-500
        text-black
        font-bold
        px-8
        py-4
        rounded-2xl
        hover:bg-cyan-400
        hover:scale-105
        transition
        duration-300
      '
    >
      Analyze Message
    </button>

    {/* LOADING TEXT GOES HERE */}
    {loading && (
      <p className='mt-6 text-cyan-400 text-xl animate-pulse'>
        Analyzing message...
      </p>
    )}

    {/* RESULT SECTION */}
    {result && (
      <div className='mt-8 bg-slate-900 border border-slate-700 p-6 rounded-3xl'>
        <h2 className='text-3xl font-bold'>
          {result}
        </h2>
      </div>
    )}

  </div>
)

}

export default Scanner