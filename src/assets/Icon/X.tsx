import React from 'react';

const X = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M10.5 10.5L3.5 3.5M3.5 10.5L10.5 3.5"
        stroke="#A5A5A5"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default X;
