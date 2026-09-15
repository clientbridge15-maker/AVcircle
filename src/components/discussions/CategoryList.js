import React from 'react';

export function CategoryList({ categories }) {
  return (
    <div className="bg-white" style={{ borderRadius: '1.2vw', padding: '1.8vw', boxShadow: '0 0.2vw 1vw rgba(0,0,0,0.03)' }}>
      <h3 className="font-semibold text-gray-800 uppercase" style={{ fontSize: '0.85vw', letterSpacing: '0.05em', marginBottom: '1.5vw' }}>
        CATEGORIES
      </h3>
      
      <div className="flex flex-col" style={{ gap: '0.5vw' }}>
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between cursor-pointer transition-colors ${cat.isActive ? 'bg-[#0033cc] text-white' : 'hover:bg-gray-50 text-gray-700'} border-b border-gray-100 last:border-b-0`}
            style={{ padding: '0.8vw 1.2vw', borderRadius: cat.isActive ? '2vw' : '0' }}
          >
            <div className="flex items-center" style={{ gap: '0.8vw' }}>
              <div className="rounded-full" style={{ width: '1.5vw', height: '1.5vw', backgroundColor: cat.isActive ? 'rgba(255,255,255,0.8)' : '#e5e7eb' }} />
              <span className={cat.isActive ? 'font-medium' : ''} style={{ fontSize: '0.85vw' }}>{cat.name}</span>
            </div>
            <span style={{ fontSize: '0.85vw' }}>{cat.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
