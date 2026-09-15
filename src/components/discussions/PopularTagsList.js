import React from 'react';

export function PopularTagsList({ tags }) {
  return (
    <div className="bg-white" style={{ borderRadius: '1.2vw', padding: '1.8vw', boxShadow: '0 0.2vw 1vw rgba(0,0,0,0.03)' }}>
      <h3 className="font-semibold text-gray-800 uppercase" style={{ fontSize: '0.85vw', letterSpacing: '0.05em', marginBottom: '1.5vw' }}>
        POPULAR TAGS
      </h3>
      
      <div className="flex flex-col" style={{ gap: '0.8vw' }}>
        {tags.map((tag, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between bg-[#f0f7ff] cursor-pointer hover:bg-[#e0efff] transition-colors"
            style={{ padding: '0.8vw 1.2vw', borderRadius: '2vw' }}
          >
            <span className="font-medium text-[#0056b3]" style={{ fontSize: '0.8vw' }}>
              #{tag.name}
            </span>
            <span className="font-medium text-[#0056b3]" style={{ fontSize: '0.8vw' }}>
              {tag.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
