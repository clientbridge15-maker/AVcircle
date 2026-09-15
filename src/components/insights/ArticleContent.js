import React from 'react';

export function ArticleContent({ content }) {
  return (
    <div style={{ padding: '1.5vw 0' }}>
      {/* Section 1 Title */}
      <h2 className="font-bold text-gray-900" style={{ fontSize: '1.1vw', marginBottom: '1vw', lineHeight: 1.3 }}>
        {content.section1Title}
      </h2>

      {/* Section 1 Paragraph */}
      <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.75vw', marginBottom: '0.8vw' }}>
        {content.paragraph1}
      </p>

      {/* Source Link */}
      {content.source1 && (
        <a href="#" className="text-[#00A4E4] hover:underline" style={{ fontSize: '0.65vw', display: 'inline-block', marginBottom: '2vw' }}>
          {content.source1}
        </a>
      )}

      {/* Divider */}
      <hr className="border-0" style={{ borderTop: '0.05vw solid #eaeaea', margin: '2vw 0' }} />

      {/* Section 2 Title */}
      <h3 className="font-bold text-gray-900" style={{ fontSize: '1.1vw', marginBottom: '1.2vw' }}>
        {content.section2Title}
      </h3>

      {/* Two Column Text */}
      <div className="flex" style={{ gap: '3vw', marginBottom: '0.8vw' }}>
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.72vw', marginBottom: '0.8vw' }}>
            {content.splitTextLeft}
          </p>
          {content.source2 && (
            <a href="#" className="text-[#00A4E4] hover:underline" style={{ fontSize: '0.6vw' }}>
              {content.source2}
            </a>
          )}
        </div>
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.72vw', marginBottom: '0.8vw' }}>
            {content.splitTextRight}
          </p>
          {content.source3 && (
            <a href="#" className="text-[#00A4E4] hover:underline" style={{ fontSize: '0.6vw' }}>
              {content.source3}
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-0" style={{ borderTop: '0.05vw solid #eaeaea', margin: '2vw 0' }} />

      {/* Section 3 - if exists */}
      {content.section3Title && (
        <>
          <h3 className="font-bold text-gray-900" style={{ fontSize: '1.1vw', marginBottom: '1.2vw' }}>
            {content.section3Title}
          </h3>

          <div className="flex" style={{ gap: '3vw' }}>
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.72vw', marginBottom: '0.8vw' }}>
                {content.section3Left}
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.72vw' }}>
                {content.section3Left2}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.72vw' }}>
                {content.section3Right}
              </p>
            </div>
          </div>

          <hr className="border-0" style={{ borderTop: '0.05vw solid #eaeaea', margin: '2vw 0' }} />
        </>
      )}
    </div>
  );
}
