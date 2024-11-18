import React from 'react';
import { theme } from 'lib/utils/style/theme';

interface CalendarProps {
  color?: string;
  width?: string;
  height?: string;
}

const Calendar = ({ color, width = '18', height = '18' }: CalendarProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.09277 9.40433H20.9167"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.442 13.3097H16.4512"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0045 13.3097H12.0137"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5572 13.3097H7.56647"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.442 17.1963H16.4512"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0045 17.1963H12.0137"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5572 17.1961H7.56647"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0443 2V5.29078"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.96613 2V5.29078"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
        stroke={color === 'gray' ? theme.gray['3.5'] : theme.gray.black}
        strokeWidth="1.5625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar;