import React from 'react';

interface BlueLeaveIconProps {
  width?: number | string;
  height?: number | string;
}

const BlueLeaveIcon = ({ width, height }: BlueLeaveIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 174.389 174.389">
    <path id="Path_214" data-name="Path 214"
          d="M931.825,271.792h64.037a88.937,88.937,0,0,0,88.836-88.837V118.918h-64.037a88.937,88.937,0,0,0-88.836,88.836Zm64.037,10.758h-74.8v-74.8a99.706,99.706,0,0,1,99.594-99.593h74.795v74.8a99.707,99.707,0,0,1-99.594,99.594"
          transform="translate(-921.067 -108.16)" fill="#1f79b9"/>
  </svg>
);

export default BlueLeaveIcon;