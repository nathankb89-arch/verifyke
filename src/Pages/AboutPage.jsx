import React from 'react'

function AboutPage() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8'>
      <section className='bg-slate-950 rounded-3xl border border-slate-800 p-8 shadow-xl shadow-slate-950/30'>
        <div className='mb-10'>
          <p className='text-sm uppercase tracking-[0.3em] text-cyan-400'>About VerifyKE</p>
          <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-6xl'>Building smarter, safer online habits.</h1>
          <p className='mt-6 max-w-3xl text-slate-300 text-lg leading-8'>
            VerifyKE is a React-based cybersecurity awareness app created as part of a software development project. It teaches users how to spot suspicious messages, misleading headlines, and online scams using engaging examples and practical tips.
          </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='space-y-4 rounded-3xl bg-slate-900 p-6 border border-slate-800'>
            <h2 className='text-2xl font-bold text-white'>Our Mission</h2>
            <p className='text-slate-300 leading-7'>
              Empower everyday internet users with the confidence and knowledge to recognize common cyber threats before they become a problem.
            </p>
            <ul className='space-y-3 text-slate-300'>
              <li>• Raise awareness on phishing and scam tactics</li>
              <li>• Deliver interactive examples and quizzes</li>
              <li>• Provide clear, actionable safety advice</li>
            </ul>
          </div>

          <div className='space-y-4 rounded-3xl bg-slate-900 p-6 border border-slate-800'>
            <h2 className='text-2xl font-bold text-white'>Core Features</h2>
            <div className='space-y-4'>
              <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
                <h3 className='font-semibold text-white'>Interactive Learning</h3>
                <p className='text-slate-400'>Practice with real-life examples and instantly learn what red flags to watch for.</p>
              </div>
              <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
                <h3 className='font-semibold text-white'>Pattern Recognition</h3>
                <p className='text-slate-400'>Understand common scam formats like fake links, urgent requests, and suspicious headlines.</p>
              </div>
              <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
                <h3 className='font-semibold text-white'>Personal Progress</h3>
                <p className='text-slate-400'>Track your learning and build habits that keep your accounts and personal information safer.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-6 lg:grid-cols-3'>
          <div className='rounded-3xl bg-slate-900 p-6 border border-slate-800 text-center'>
            <p className='text-5xl font-bold text-cyan-400'>5+</p>
            <p className='mt-3 text-sm uppercase tracking-[0.18em] text-slate-500'>Learning Modules</p>
          </div>
          <div className='rounded-3xl bg-slate-900 p-6 border border-slate-800 text-center'>
            <p className='text-5xl font-bold text-cyan-400'>100%</p>
            <p className='mt-3 text-sm uppercase tracking-[0.18em] text-slate-500'>Hands-on Practice</p>
          </div>
          <div className='rounded-3xl bg-slate-900 p-6 border border-slate-800 text-center'>
            <p className='text-5xl font-bold text-cyan-400'>Easy</p>
            <p className='mt-3 text-sm uppercase tracking-[0.18em] text-slate-500'>Friendly UX</p>
          </div>
        </div>

        <div className='mt-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8 border border-cyan-500/10'>
          <h2 className='text-2xl font-bold text-white mb-3'>Why VerifyKE?</h2>
          <p className='text-slate-300 leading-8'>
            Many people encounter suspicious online content every day. VerifyKE turns that exposure into a learning opportunity, helping users make better decisions in email, social media, messaging, and browsing.
          </p>
        </div>

        <div className='mt-10 rounded-3xl bg-slate-900 p-6 border border-slate-800'>
          <h2 className='text-2xl font-bold text-white mb-4'>Common Threats We Cover</h2>
          <ul className='grid gap-3 sm:grid-cols-2 text-slate-300'>
            <li className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>Phishing Emails</li>
            <li className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>Fake Links & URLs</li>
            <li className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>Social Engineering</li>
            <li className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>Misleading Headlines</li>
            <li className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>Urgent Requests</li>
            <li className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>Suspicious Attachments</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutPage