import React from "react";

interface ArrowDownProps {
  className?: string;
  width?: string;
  height?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="#CCCFD4"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.977 6.27275C14.1034 6.39931 14.1744 6.57087 14.1744 6.74975C14.1744 6.92863 14.1034 7.10019 13.977 7.22675L9.47696 11.7267C9.3504 11.8532 9.17883 11.9242 8.99996 11.9242C8.82108 11.9242 8.64952 11.8532 8.52296 11.7267L4.02296 7.22675C3.90373 7.09879 3.83882 6.92955 3.8419 6.75468C3.84499 6.57981 3.91583 6.41296 4.0395 6.28929C4.16317 6.16562 4.33002 6.09478 4.50489 6.09169C4.67976 6.08861 4.849 6.15352 4.97696 6.27275L8.99996 10.2935L13.023 6.27162C13.1495 6.14522 13.3211 6.07422 13.5 6.07422C13.6788 6.07422 13.8504 6.14522 13.977 6.27162V6.27275Z"
      fill="#CCCFD4"
    />
  </svg>
);

export default ArrowDown;
