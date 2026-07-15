/**
 * Inline ICAP brand mark: bold wordmark plus the circular rising-bars badge,
 * recreated as vector so it stays crisp and can be recoloured (the supplied
 * PNG is navy-only). `tone` picks the colourway; `withText` toggles the
 * "ICAP" letters vs. badge-only.
 */
export function BrandMark({
  tone = 'navy',
  withText = true,
  className,
}: {
  tone?: 'navy' | 'light'
  withText?: boolean
  className?: string
}) {
  const ink = tone === 'navy' ? 'var(--navy-700)' : 'var(--paper)'
  const badge = (
    <svg
      viewBox="0 0 64 64"
      className="brandmark__badge"
      role="img"
      aria-label={withText ? undefined : 'ICAP'}
      aria-hidden={withText ? true : undefined}
    >
      <circle cx="32" cy="32" r="28" fill="none" stroke={ink} strokeWidth="6" />
      <rect x="19" y="34" width="7.5" height="13" rx="1" fill={ink} />
      <rect x="29" y="26" width="7.5" height="21" rx="1" fill={ink} />
      <rect x="39" y="17" width="7.5" height="30" rx="1" fill={ink} />
    </svg>
  )

  if (!withText) {
    return <span className={`brandmark ${className ?? ''}`}>{badge}</span>
  }

  return (
    <span className={`brandmark ${className ?? ''}`} style={{ color: ink }}>
      <span className="brandmark__word" aria-hidden="true">
        ICAP
      </span>
      {badge}
      <span className="sr-only">ICAP — Industry Compliance and Proficiency Australia</span>
    </span>
  )
}
