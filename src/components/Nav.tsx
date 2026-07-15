import { useEffect, useState } from 'react'
import { BrandMark } from './BrandMark'

const LINKS = [
  { label: 'Courses', href: '#courses' },
  { label: 'Templates', href: '#templates' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('content-start')
    if (!sentinel) {
      setSolid(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setSolid(entry.isIntersecting)
        }
      },
      { rootMargin: '0px 0px -50% 0px' },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const handleLink = () => setOpen(false)

  return (
    <nav className={`nav${solid ? ' nav--solid' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" aria-label="ICAP — back to top">
          <BrandMark tone={solid ? 'navy' : 'light'} />
        </a>
        <div className="nav__links" id="nav-menu">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLink}>
              {link.label}
            </a>
          ))}
          <a className="pill nav__cta" href="#contact" onClick={() => setOpen(false)}>
            Free consultation
          </a>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
