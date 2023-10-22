import React from 'react';
import { useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();
  return (
    <svg
      fill={theme.palette.secondary.main}
      width='35px'
      height='35px'
      viewBox='0 0 512.00 512.00'
      xmlns='http://www.w3.org/2000/svg'
      transform='rotate(0)'
      stroke={theme.palette.secondary.main}
      strokeWidth='0.00512'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke='#CCCCCC'
        strokeWidth='3.072'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <title>ionicons-v5_logos</title>
        <path d='M313.8,303.9,469,32H365L209.4,303.8a1.35,1.35,0,0,0,0,1.7l98.9,173.8c.4.7.8.7,1.6.7H413L313.7,305.3A1.74,1.74,0,0,1,313.8,303.9Z'></path>
        <path d='M221.9,216.2,163,113a2,2,0,0,0-2-1H65l58.9,104.4a1.13,1.13,0,0,1,.1.8L43,352h96.8a1.54,1.54,0,0,0,1.6-.9l80.5-133.7A2.44,2.44,0,0,0,221.9,216.2Z'></path>
      </g>
    </svg>
  );
};

export default Logo;
