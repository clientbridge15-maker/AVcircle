import React from 'react';

export function DiscussionItem({ discussion }) {
  return (
    <div className="flex border-b border-gray-100 last:border-b-0" style={{ gap: '0.7vw', padding: '0.8vw 0' }}>
      <div className="rounded-full bg-[#00a4e4] flex items-center justify-center flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
        <img src="/images/chaticon.svg" alt="Discussion" style={{ width: '1.2vw', height: '1.2vw', filter: 'brightness(0) invert(1)' }} />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 leading-snug" style={{ fontSize: '0.72vw', marginBottom: '0.2vw' }}>
          {discussion.title}
        </h4>
        <div className="text-gray-400" style={{ fontSize: '0.58vw' }}>
          {discussion.replies} replies &nbsp;|&nbsp; {discussion.timeAgo}
        </div>
      </div>
    </div>
  );
}
