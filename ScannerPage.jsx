import { useState } from 'react'

function Scanner() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [matchedWords, setMatchedWords] = useState([])
  const [history, setHistory] = useState([])

  const suspiciousWords = [
    'free',
    'winner',
    'urgent',
    'click',
    'password',
    'money',
    'bank',
    'claim',
    'offer',
    'verify',
    'account',
    'limited',
  ]

  const scanMessage = () => {
    if (!text.trim()) {
      return
    }

    setLoading(true)
    setResult('')
    setMatchedWords([])

    setTimeout(() => {
      const lowered = text.toLowerCase()
      const matches = suspiciousWords.filter(word => lowered.includes(word))
      const uniqueMatches = [...new Set(matches)]
      const score = uniqueMatches.length

      let classification = 'Looks Safe'
      let threat = 'Low'

      if (score >= 4) {
        classification = 'Dangerous Scam Detected'
        threat = 'High'
      } else if (score >= 2) {
        classification = 'Suspicious Message'
        threat = 'Medium'
      }

      setResult(classification)
      setMatchedWords(uniqueMatches)
      setHistory(prev => [
        {
          id: Date.now(),
          time: new Date().toLocaleString(),
          result: classification,
          threat,
          score,
          matchedWords: uniqueMatches,
          preview: text.slice(0, 120),
        },
        ...prev,
      ].slice(0, 5))
      setLoading(false)
    }, 1200)
  }

  const clearText = () => {
    setText('')
    setResult('')
    setMatchedWords([])
  }

  const copyText = async () => {
    if (!text.trim()) {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.warn('Copy failed', error)
    }
  }

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
  const charCount = text.length

  const resultBadge =
    result === 'Dangerous Scam Detected'
      ? 'bg-red-500 text-white'
      : result === 'Suspicious Message'
      ? 'bg-amber-400 text-black'
      : 'bg-emerald-500 text-white'

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-5xl font-bold mb-4'>Scam Scanner</h1>
      <p className='text-slate-400 max-w-2xl mb-8'>
        Paste a message or email content here and scan it for common phishing and scam indicators. The tool highlights suspicious terms,
        calculates a threat score, and preserves the most recent scans.
      </p>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Paste suspicious message here...'
        className='w-full h-60 bg-slate-900 border border-slate-700 rounded-3xl p-6 text-lg outline-none resize-none'
      />

      <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center'>
        <button
          onClick={scanMessage}
          disabled={loading || !text.trim()}
          className='inline-flex items-center justify-center bg-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:scale-105 transition duration-300 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Analyze Message
        </button>

        <button
          onClick={copyText}
          disabled={!text.trim()}
          className='inline-flex items-center justify-center bg-slate-800 text-slate-200 font-semibold px-6 py-4 rounded-2xl hover:bg-slate-700 transition duration-300 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Copy Text
        </button>

        <button
          onClick={clearText}
          className='inline-flex items-center justify-center bg-slate-700 text-slate-200 font-semibold px-6 py-4 rounded-2xl hover:bg-slate-600 transition duration-300'
        >
          Clear
        </button>
      </div>

      <div className='mt-6 grid gap-4 sm:grid-cols-3'>
        <div className='rounded-3xl border border-slate-700 bg-slate-900 p-5'>
          <p className='text-sm text-slate-400'>Word Count</p>
          <p className='mt-2 text-2xl font-bold'>{wordCount}</p>
        </div>
        <div className='rounded-3xl border border-slate-700 bg-slate-900 p-5'>
          <p className='text-sm text-slate-400'>Character Count</p>
          <p className='mt-2 text-2xl font-bold'>{charCount}</p>
        </div>
        <div className='rounded-3xl border border-slate-700 bg-slate-900 p-5'>
          <p className='text-sm text-slate-400'>Detected Terms</p>
          <p className='mt-2 text-2xl font-bold'>{matchedWords.length}</p>
        </div>
      </div>

      {loading && (
        <p className='mt-6 text-cyan-400 text-xl animate-pulse'>Analyzing message...</p>
      )}

      {result && (
        <div className='mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-6'>
          <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${resultBadge}`}>
            {result}
          </div>
          <div className='mt-4 space-y-3'>
            <p className='text-slate-300'>Threat level: <span className='font-semibold'>{result === 'Looks Safe' ? 'Low' : result === 'Suspicious Message' ? 'Medium' : 'High'}</span></p>
            <p className='text-slate-300'>Suspicious terms found: {matchedWords.length}</p>
            {matchedWords.length > 0 && (
              <div className='flex flex-wrap gap-2 mt-3'>
                {matchedWords.map(word => (
                  <span key={word} className='rounded-full bg-cyan-500 px-3 py-1 text-sm font-medium text-black'>
                    {word}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className='mt-10'>
          <h2 className='text-3xl font-bold mb-4'>Recent Scan History</h2>
          <div className='space-y-4'>
            {history.map(item => (
              <div key={item.id} className='rounded-3xl border border-slate-700 bg-slate-900 p-5'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <p className='text-sm text-slate-400'>{item.time}</p>
                  <div className='inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200'>
                    {item.result}
                  </div>
                </div>
                <p className='mt-3 text-slate-300 text-sm'>{item.preview}{item.preview.length === 120 ? '...' : ''}</p>
                <div className='mt-4 flex flex-wrap gap-2 text-sm text-slate-400'>
                  <span>Score: {item.score}</span>
                  <span>Threat: {item.threat}</span>
                  <span>{item.matchedWords.length} suspicious terms</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Scanner