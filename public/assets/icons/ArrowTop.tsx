import React from "react";

interface ArrowTopProps {
  className?: string;
  width?: string;
  height?: string;
}

const ArrowTop: React.FC<ArrowTopProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="#71A8FF"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.02304 11.7273C3.89664 11.6007 3.82563 11.4291 3.82563 11.2503C3.82563 11.0714 3.89664 10.8998 4.02304 10.7733L8.52304 6.27325C8.6496 6.14684 8.82117 6.07584 9.00004 6.07584C9.17892 6.07584 9.35048 6.14684 9.47704 6.27325L13.977 10.7733C14.0963 10.9012 14.1612 11.0704 14.1581 11.2453C14.155 11.4202 14.0842 11.587 13.9605 11.7107C13.8368 11.8344 13.67 11.9052 13.4951 11.9083C13.3202 11.9114 13.151 11.8465 13.023 11.7273L9.00004 7.7065L4.97704 11.7284C4.85048 11.8548 4.67892 11.9258 4.50004 11.9258C4.32117 11.9258 4.1496 11.8548 4.02304 11.7284V11.7273Z"
      fill="#71A8FF"
    />
  </svg>
);

export default ArrowTop;
