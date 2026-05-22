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

        <div className='mt-10 rounded-3xl bg-slate-900 p-6 border border-slate-800'>
          <h2 className='text-2xl font-bold text-white mb-6'>How It Works</h2>
          <div className='space-y-4'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold'>1</div>
              </div>
              <div>
                <h3 className='font-semibold text-white mb-2'>Learn the Basics</h3>
                <p className='text-slate-400'>Start with our guided modules to understand common cyber threats and red flags.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold'>2</div>
              </div>
              <div>
                <h3 className='font-semibold text-white mb-2'>Practice with Examples</h3>
                <p className='text-slate-400'>Analyze real-world scenarios and test your ability to spot scams and threats.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold'>3</div>
              </div>
              <div>
                <h3 className='font-semibold text-white mb-2'>Track Your Progress</h3>
                <p className='text-slate-400'>Monitor your learning journey and earn recognition for completed modules.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 rounded-3xl bg-slate-900 p-6 border border-slate-800'>
          <h2 className='text-2xl font-bold text-white mb-6'>Advanced Features</h2>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
              <h3 className='font-semibold text-white mb-2'>🎯 Scenario-Based Learning</h3>
              <p className='text-slate-400 text-sm'>Real-world scenarios that mimic actual phishing attempts and scams.</p>
            </div>
            <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
              <h3 className='font-semibold text-white mb-2'>📊 Performance Analytics</h3>
              <p className='text-slate-400 text-sm'>Detailed insights into your learning patterns and improvement areas.</p>
            </div>
            <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
              <h3 className='font-semibold text-white mb-2'>🔐 Security Tips</h3>
              <p className='text-slate-400 text-sm'>Actionable advice for protecting yourself online and offline.</p>
            </div>
            <div className='rounded-2xl bg-slate-950 p-4 ring-1 ring-slate-800'>
              <h3 className='font-semibold text-white mb-2'>🏆 Achievement System</h3>
              <p className='text-slate-400 text-sm'>Earn badges and certificates as you complete learning milestones.</p>
            </div>
          </div>
        </div>

        <div className='mt-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 border border-slate-700'>
          <h2 className='text-2xl font-bold text-white mb-4'>Get Started Today</h2>
          <p className='text-slate-300 mb-6'>
            Join thousands of users who are building better cybersecurity habits. Whether you're a student, professional, or just someone who wants to stay safe online, VerifyKE has something for you.
          </p>
          <div className='flex gap-4'>
            <button className='px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold transition-colors'>
              Start Learning
            </button>
            <button className='px-6 py-3 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 font-semibold transition-colors'>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage