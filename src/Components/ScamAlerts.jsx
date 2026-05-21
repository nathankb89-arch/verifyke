import React from 'react'

function ScamAlerts() {
  const alerts = [
    'Fake university scholarship links circulating online',
    'Fraudulent mobile money verification messages detected',
    'Fake job recruitment scams trending on social media',
  ]

  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-bold mb-6'>Recent Scam Alerts</h2>

      <div className='space-y-4'>
        {alerts.map((alert, index) => (
          <div
            key={index}
            className='bg-slate-900 border border-slate-800 p-5 rounded-2xl'
          >
            {alert}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScamAlerts

