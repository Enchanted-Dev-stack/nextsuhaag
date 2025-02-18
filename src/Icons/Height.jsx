import React from 'react';

function HeightIcon(props) {
  return (
    <div className="parent w-[20px] h-[20px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-full h-full text-blue-500">
        <path fill={props.color || "currentColor"} d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"/>
      </svg>
    </div>
  );
}

export default HeightIcon;
