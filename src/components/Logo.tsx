type LogoProps = {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  const color = light ? '#FFFFFF' : '#1B2A3B'

  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Black Palm home">
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 43V20"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 20C20 11 13 8 6 9c5 4 8 8 10 14"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 20C24 10 29 5 37 4c-3 6-5 11-4 18"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 20c6-6 13-7 20-3-6 2-10 5-13 10"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 20c-7-2-13 0-18 6 7-1 12 0 17 5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[18px] font-bold tracking-[-0.02em]" style={{ color }}>
        BlackPalm
      </span>
    </a>
  )
}
