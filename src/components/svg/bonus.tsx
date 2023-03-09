export const BonusIcon = ({
  size = 24,
  color = "currentColor",
  bg = "none",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={bg}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7L12.0882 7.38849C12.5994 9.64134 14.3587 11.4006 16.6115 11.9118L17 12L16.6115 12.0882C14.3587 12.5994 12.5994 14.3587 12.0882 16.6115L12 17L11.9118 16.6115C11.4006 14.3587 9.64134 12.5994 7.38849 12.0882L7 12L7.38849 11.9118C9.64134 11.4006 11.4006 9.64134 11.9118 7.38849L12 7Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);
