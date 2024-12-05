import React from 'react';
import {BenefitCardProps} from "./types";

const BenefitCard = ({ children, icon, title }: BenefitCardProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="416"
      height="246"
      viewBox="0 0 416 246"
    >
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#0e76be"/>
          <stop offset="1" stopColor="#46a748"/>
        </linearGradient>
      </defs>
      <g
        transform="translate(-944 -2372)"
        style={{mixBlendMode: 'normal', isolation: 'isolate'}}
      >
        <g transform="translate(864)">
          <rect
            width="416"
            height="246"
            rx="32"
            transform="translate(80 2372)"
            fill="url(#linear-gradient)"
          />
          <rect
            width="412"
            height="242"
            rx="31"
            transform="translate(82 2374)"
            fill="#fff"
          />
        </g>
        <text
          transform="translate(1052 2440)"
          fontSize="22"
          fontFamily="IBMPlexSansThai-Bold, IBM Plex Sans Thai"
          fontWeight="700"
          letterSpacing="0.015em"
        >
          {title}
        </text>

        {children}

        <path
          d="M886.63,248.867V274.32a34.546,34.546,0,0,1-34.546,34.547H826.63V283.413a34.546,34.546,0,0,1,34.547-34.546Z"
          transform="translate(149.37 2155.133)"
          fill="url(#linear-gradient)"
        />

        {icon}
      </g>
    </svg>
  )
};

export default BenefitCard;