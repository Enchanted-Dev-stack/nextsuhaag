import React from "react";

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="111"
      height="32"
      fill="none"
      class="mb-2 origin-bottom-left scale-75 md:mb-4 md:scale-100"
    >
      <path
        fill="url(#leaf-right_svg__a)"
        stroke="#9E9480"
        stroke-width="0.5"
        d="M1 27.857c3.667 2.5 14 3.7 26-11.5S49-.31 52.5.857c-2.333 2.666-7 8.6-7 11-.808 1.347-3.576 4.37-8.832 7.381C50.888 12.314 76.134 2.8 89.5 7.856l20.5 8.5c-1.302 3.667-9.625 8.8-32.5 0-3.5-2.166-15-4.4-33 4 6 .334 18.7 1.8 21.5 5-2.333 2-10.2 5-23 1-4.167-1.333-14.6-2.7-23 2.5-4 2.167-13.4 5-19-1Z"
      ></path>
      <defs>
        <linearGradient
          id="leaf-right_svg__a"
          x1="3.5"
          x2="110"
          y1="29.544"
          y2="17.044"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BEAB7E"></stop>
          <stop offset="0.5" stop-color="#E0B965"></stop>
          <stop offset="1" stop-color="#CFA23E"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LeafIcon;
