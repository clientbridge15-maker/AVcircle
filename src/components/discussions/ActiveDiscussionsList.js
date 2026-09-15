import React from 'react';
import Link from 'next/link';

export function ActiveDiscussionsList({ discussions }) {
  return (
    <div className="bg-white" style={{ borderRadius: '1.2vw', padding: '1.8vw', boxShadow: '0 0.2vw 1vw rgba(0,0,0,0.03)' }}>
      <h3 className="font-semibold text-gray-800 uppercase" style={{ fontSize: '0.85vw', letterSpacing: '0.05em', marginBottom: '1.5vw' }}>
        RECENTLY ACTIVE DISCUSSIONS
      </h3>
      
      <div className="flex flex-col" style={{ gap: '1vw' }}>
        {discussions.map((disc, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between bg-gray-100 transition-colors"
            style={{ padding: '1.2vw 2vw', borderRadius: '3vw' }}
          >
            <div>
              <Link href="#" className="no-underline text-inherit">
                <h4 className="font-medium text-[#2d6896] hover:text-[#00A4E4] leading-snug" style={{ fontSize: '0.9vw', marginBottom: '0.3vw' }}>
                  {disc.title}
                </h4>
              </Link>
              <div className="text-gray-500" style={{ fontSize: '0.75vw' }}>
                {disc.author} &nbsp;|&nbsp; {disc.timeAgo} in {disc.category}
              </div>
            </div>
            
            <button className="rounded-full bg-[#00A4E4] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer border-none flex-shrink-0" style={{ width: '2.2vw', height: '2.2vw' }}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '1vw', height: '1vw' }}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
