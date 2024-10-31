import React from 'react';

interface DeleteProps {
  onClick: () => void;
}

const Delete = ({ onClick } : DeleteProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M13.5 13.5L4.5 4.5M4.5 13.5L13.5 4.5"
        stroke="#A5A5A5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Delete;