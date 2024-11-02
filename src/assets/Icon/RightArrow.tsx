interface RightArrowProps {
  width: string;
  height: string;
  color: string;
}

const RightArrow = ({ width, height, color }: RightArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M5 3.5L9 7L5 10.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
