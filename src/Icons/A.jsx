import React from 'react';

function ParentComponent() {
  return (
    <div className="parent w-[20px] h-[20px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-full h-full text-slate-400">
        <path fill="currentColor" d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"/>
      </svg>
    </div>
  );
}

export default ParentComponent;
