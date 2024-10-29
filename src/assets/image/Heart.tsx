import { theme } from 'lib/utils/style/theme';
import React, { useState } from 'react';

interface OwnProps {
  width?: string;
  height?: string;
  disabled?: boolean;
}

const Heart = ({ width = '18', height = '19', disabled = false }: OwnProps) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (disabled) return;
    setIsFilled(!isFilled);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      onClick={handleClick}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.1539 9.19874C1.34915 6.68624 2.28965 3.81449 4.9274 2.96474C6.3149 2.51699 7.8464 2.78099 8.9999 3.64874C10.0911 2.80499 11.6789 2.51999 13.0649 2.96474C15.7026 3.81449 16.6491 6.68624 15.8451 9.19874C14.5926 13.1812 8.9999 16.2487 8.9999 16.2487C8.9999 16.2487 3.4484 13.2277 2.1539 9.19874Z"
        stroke="#1A1E27"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isFilled ? `${theme.sub.red}` : 'none'}
      />
    </svg>
  );
};

export default Heart;