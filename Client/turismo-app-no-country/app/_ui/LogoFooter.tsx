import React from "react";

const LogoFooter = () => {
  return (
    <>
      <svg
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_669_1992)">
          <path
            d="M10.2284 24.9999L5.36115 19.1592"
            stroke="#FF8A00"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
          <path
            d="M1.954 12.8324C-0.966293 -4.69027 25.0735 -2.01327 16.5558 15.9955C15.4201 18.1046 12.5647 22.8584 10.2284 25"
            stroke="#FF8A00"
            strokeLinecap="round"
          />
          <circle cx="9.74165" cy="9.66804" r="4.86726" fill="#206F1E" />
          <circle
            cx="4.63106"
            cy="18.1861"
            r="0.966814"
            fill="#206F1E"
            stroke="#FF8A00"
            strokeWidth="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_669_1992"
            x="0.224487"
            y="0.5"
            width="19.5515"
            height="27"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_669_1992"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_669_1992"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default LogoFooter;
