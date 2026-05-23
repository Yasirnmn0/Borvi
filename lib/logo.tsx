export default function BorviLogoWhite({ className = "w-40 h-auto" }) {
  return (
    <svg
      viewBox="0 0 320 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle */}
      <circle cx="50" cy="50" r="40" fill="#ffffff" />

      {/* Custom B with Arrow */}
      <path
        d="
          M30 25 
          H55 
          C70 25 75 35 65 42 
          C78 45 78 60 60 65 
          H30 
          Z

          M40 35 
          H55 
          C60 35 60 42 55 42 
          H40 
          Z

          M40 48 
          H58 
          C65 48 65 58 55 58 
          H40 
          Z

          M55 40 
          L75 50 
          L55 60 
          Z
        "
        fill="#000000"
      />

      {/* Text */}
      <text
        x="110"
        y="62"
        fontSize="38"
        fontWeight="600"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
      >
        Borvi
      </text>
    </svg>
  );
}
