import React from 'react';

export function ActiveMembersList({ members }) {
  return (
    <div className="bg-white" style={{ borderRadius: '1.2vw', padding: '1.8vw', boxShadow: '0 0.2vw 1vw rgba(0,0,0,0.03)' }}>
      <h3 className="font-semibold text-gray-800 uppercase" style={{ fontSize: '0.85vw', letterSpacing: '0.05em', marginBottom: '1.5vw' }}>
        MOST ACTIVE MEMBERS
      </h3>
      
      <div className="flex flex-col" style={{ gap: '1.5vw' }}>
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center" style={{ gap: '1vw' }}>
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="rounded-full object-cover" 
                style={{ width: '2.8vw', height: '2.8vw' }} 
              />
              <div>
                <h4 className="font-semibold text-gray-900 leading-snug" style={{ fontSize: '0.9vw' }}>
                  {member.name}
                </h4>
                <div className="text-gray-400" style={{ fontSize: '0.7vw' }}>
                  {member.contributions} contributions
                </div>
              </div>
            </div>
            <button className="bg-transparent border-none text-gray-400 hover:text-[#00A4E4] cursor-pointer transition-colors flex-shrink-0" title="Follow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '1.5vw', height: '1.5vw' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="17" y1="11" x2="23" y2="11" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
