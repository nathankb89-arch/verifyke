import React from 'react'
import { useState } from 'react'

function NewsPage() {
 const [headline, setHeadline] = useState('')
  const [response, setResponse] = useState('')

  const verifyHeadline = () => {
    if (
      headline.toLowerCase().includes('breaking') ||
      headline.toLowerCase().includes('shocking')
    ) {
      setResponse('Potentially Misleading Headline')
    } else {
      setResponse('Headline Seems Credible')
    }
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

      <button
        onClick={verifyHeadline}
        className='mt-6 bg-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:bg-cyan-400 transition'
      >
        Verify Headline
      </button>

      {response && (
        <div className='mt-8 bg-slate-900 border border-slate-700 p-6 rounded-3xl'>
          <h2 className='text-3xl font-bold'>{response}</h2>
        </div>
      )}
    </div>
  )
}

export default NewsPage
