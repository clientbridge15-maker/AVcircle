import React from 'react';

export function PollWidget({ question, options, responsesText, title = "RELATED POLLS" }) {
  return (
    <div className="bg-white" style={{ borderRadius: '0.8vw', padding: '1.2vw', boxShadow: '0 0.3vw 1vw rgba(0,0,0,0.05)', marginBottom: '0.5vw' }}>
      <h3 className="font-semibold text-gray-800 uppercase" style={{ fontSize: '0.65vw', letterSpacing: '0.05em', marginBottom: '0.6vw' }}>
        {title}
      </h3>
      <p className="font-medium text-gray-900" style={{ marginBottom: '0.8vw', fontSize: '0.8vw' }}>{question}</p>

      <div className="flex flex-col" style={{ gap: '0.5vw' }}>
        {options.map((option, index) => (
          <div key={index} className="relative bg-gray-100 overflow-hidden flex items-center" style={{ height: '2.2vw', borderRadius: '1.2vw' }}>
            {/* Progress Bar */}
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: `${option.percentage}%`,
                background: option.color || '#3eb0ff',
                borderRadius: '1.2vw',
                zIndex: 1
              }}
            />

            {/* Content overlay */}
            <div className="relative flex justify-between w-full" style={{ zIndex: 2, padding: '0 0.8vw' }}>
              <span className="font-semibold" style={{ fontSize: '0.65vw', color: option.percentage > 20 ? '#fff' : '#555' }}>{option.percentage}%</span>
              <span style={{ fontSize: '0.65vw', color: option.percentage > 50 ? '#fff' : '#555' }}>{option.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-gray-400" style={{ marginTop: '0.5vw', fontSize: '0.55vw' }}>
        {responsesText}
      </div>
    </div>
  );
}
