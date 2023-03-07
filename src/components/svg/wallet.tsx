export const WalletIcon = ({
  size = 24,
  color = "currentColor",
  bg = "none",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.94805C1 4.87217 1.87944 4 2.96429 4H21.0357C22.1206 4 23 4.87217 23 5.94805V17.0519C23 18.1278 22.1206 19 21.0357 19H2.96429C1.87944 19 1 18.1278 1 17.0519V5.94805Z"
      fill={bg}
    />
    <path
      d="M1.91667 7.08824H22.5417M1.58929 9.76067H22.0389M3.64 12.8235H7.16M3.64 15.9118H12.44M2.96429 19H21.0357C22.1206 19 23 18.1278 23 17.0519V5.94805C23 4.87217 22.1206 4 21.0357 4H2.96429C1.87944 4 1 4.87217 1 5.94805V17.0519C1 18.1278 1.87944 19 2.96429 19Z"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);
