interface LogoProps {
  className?: string;
}
export function Logo({ className }: LogoProps) {
    return (
        <svg
      viewBox="0 0 400 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Texto principal */}
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="42"
        fontWeight="700"
        letterSpacing="2"
        fill="#1a1a1a"
        style={{ fontFamily: "Bebas Neue, serif" }}
      >
        IMPÉRIO
      </text>

      {/* Subtexto */}
      <text
        x="50%"
        y="75%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="18"
        letterSpacing="4"
        fill="#6b8e23"
        style={{ fontFamily: "Bebas Neue, serif" }}
      >
        DAS ERVAS
      </text>

      {/* Linha decorativa esquerda */}
      <line
        x1="60"
        y1="82"
        x2="140"
        y2="82"
        stroke="#c9a227"
        strokeWidth="2"
      />

      {/* Linha decorativa direita */}
      <line
        x1="260"
        y1="82"
        x2="340"
        y2="82"
        stroke="#c9a227"
        strokeWidth="2"
      />
    </svg>
    )
}