import React from "react";

interface CheckProps {
  className?: string;
  width?: number;
  height?: number;
}

const Check: React.FC<CheckProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="#00AF3C"
  >
    <path
      d="M6.9375 11L11.8958 6.0625L10.8333 5L6.9375 8.875L5.16667 7.125L4.10417 8.1875L6.9375 11ZM8 16C6.90278 16 5.86806 15.7917 4.89583 15.375C3.92361 14.9583 3.07292 14.3854 2.34375 13.6562C1.61458 12.9271 1.04167 12.0764 0.625 11.1042C0.208333 10.1319 0 9.09722 0 8C0 6.88889 0.208333 5.85069 0.625 4.88542C1.04167 3.92014 1.61458 3.07292 2.34375 2.34375C3.07292 1.61458 3.92361 1.04167 4.89583 0.625C5.86806 0.208333 6.90278 0 8 0C9.11111 0 10.1493 0.208333 11.1146 0.625C12.0799 1.04167 12.9271 1.61458 13.6562 2.34375C14.3854 3.07292 14.9583 3.92014 15.375 4.88542C15.7917 5.85069 16 6.88889 16 8C16 9.09722 15.7917 10.1319 15.375 11.1042C14.9583 12.0764 14.3854 12.9271 13.6562 13.6562C12.9271 14.3854 12.0799 14.9583 11.1146 15.375C10.1493 15.7917 9.11111 16 8 16ZM8 14.5C9.80556 14.5 11.3403 13.8681 12.6042 12.6042C13.8681 11.3403 14.5 9.80556 14.5 8C14.5 6.19444 13.8681 4.65972 12.6042 3.39583C11.3403 2.13194 9.80556 1.5 8 1.5C6.19444 1.5 4.65972 2.13194 3.39583 3.39583C2.13194 4.65972 1.5 6.19444 1.5 8C1.5 9.80556 2.13194 11.3403 3.39583 12.6042C4.65972 13.8681 6.19444 14.5 8 14.5Z"
      fill="#00AF3C"
    />
  </svg>
);

export default Check;
