import React from 'react'
import { useState, useEffect } from 'react'

function NewsPage() {
 const [headline, setHeadline] = useState('')
  const [response, setResponse] = useState('')
  const [explanation, setExplanation] = useState('')
  const [sourceUrl, setSourceUrl] = useState('')
  const [history, setHistory] = useState([])

  const verifyHeadline = () => {
    if (!headline.trim()) return

    const text = headline.toLowerCase()
    const reasons = []

    // simple heuristics
    const sensational = ['breaking', 'shocking', 'you won\'t believe', 'unbelievable', 'shocker', 'exclusive']
    if (sensational.some((w) => text.includes(w))) reasons.push('Uses sensational language')

    if (text.split(' ').length < 4) reasons.push('Very short headline — may lack context')

    if (/[A-Z]{2,}/.test(headline) && headline.length > 8) reasons.push('Excessive uppercase — could be clickbait')

    if (reasons.length) {
      setResponse('Potentially Misleading Headline')
      setExplanation(reasons.join('. '))
    } else {
      setResponse('Headline Seems Credible')
      setExplanation('No obvious red flags detected by basic heuristics')
    }

    const entry = {
      id: Date.now(),
      headline: headline.trim(),
      result: reasons.length ? 'Potentially Misleading' : 'Credible',
      time: new Date().toLocaleString(),
      source: sourceUrl.trim() || null,
    }
    const newHistory = [entry, ...history].slice(0, 25)
    setHistory(newHistory)
    try {
      localStorage.setItem('news_checks', JSON.stringify(newHistory))
    } catch (e) {}
  }

  const clearForm = () => {
    setHeadline('')
    setSourceUrl('')
    setResponse('')
    setExplanation('')
  }

  const clearHistory = () => {
    setHistory([])
    try { localStorage.removeItem('news_checks') } catch (e) {}
  }

  return (
    <div className='max-w-4xl mx-auto'>

      <h1 className='text-5xl font-bold mb-8'>News Verification</h1>

      <input
        type='text'
        placeholder='Enter headline here...'
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        className='w-full bg-slate-900 border border-slate-700 rounded-2xl p-5 text-lg outline-none'
      />

      <input
        type='url'
        placeholder='Optional source URL (paste link to article)'
        value={sourceUrl}
        onChange={(e) => setSourceUrl(e.target.value)}
        className='w-full mt-4 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-sm outline-none'
      />

      <div className='flex items-center justify-between mt-2 text-sm text-slate-400'>
        <div>{headline.length} characters</div>
        <div className='flex gap-2'>
          <button onClick={clearForm} className='text-xs px-3 py-1 border rounded'>Clear</button>
        </div>
      </div>

      <button
        onClick={verifyHeadline}
        className='mt-6 bg-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:bg-cyan-400 transition'
        disabled={!headline.trim()}
      >
        Verify Headline
      </button>

      {response && (
        <div className='mt-8 bg-slate-900 border border-slate-700 p-6 rounded-3xl'>
          <h2 className='text-3xl font-bold'>{response}</h2>
          {explanation && <p className='mt-3 text-slate-400'>{explanation}</p>}
        </div>
      )}

      <div className='mt-8'>
        <h3 className='text-2xl font-bold mb-3'>Recent Checks</h3>
        <div className='space-y-3'>
          {history.length === 0 && <div className='text-slate-400'>No recent checks</div>}
          {history.map((h) => (
            <div key={h.id} className='bg-slate-900 border border-slate-700 p-4 rounded-2xl'>
              <div className='flex justify-between'>
                <div className='font-semibold'>{h.headline}</div>
                <div className='text-sm text-slate-400'>{h.time}</div>
              </div>
              <div className='mt-1 text-sm text-slate-300'>Result: {h.result}{h.source ? ` — source provided` : ''}</div>
            </div>
          ))}
        </div>
        {history.length > 0 && (
          <div className='mt-4'>
            <button onClick={clearHistory} className='px-4 py-2 bg-red-600 rounded'>Clear History</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsPage
