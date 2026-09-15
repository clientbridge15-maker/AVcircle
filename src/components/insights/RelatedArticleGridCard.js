import React from 'react';
import Link from 'next/link';

export function RelatedArticleGridCard({ article }) {
  return (
    <Link href={`/insights/${article.id}`} className="no-underline text-inherit block">
      <div className="flex flex-col h-full" style={{ gap: '0.6vw' }}>
        <img
          src={article.image || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop'}
          alt={article.title}
          className="w-full object-cover"
          style={{ height: '10vw', borderRadius: '0.5vw' }}
        />
        <h4 className="font-semibold text-gray-900 leading-snug" style={{ fontSize: '0.85vw', marginBottom: '0.15vw' }}>
          {article.title}
        </h4>
        <p className="text-gray-500 leading-relaxed line-clamp-3" style={{ fontSize: '0.68vw' }}>
          {article.description}
        </p>
      </div>
    </Link>
  );
}
