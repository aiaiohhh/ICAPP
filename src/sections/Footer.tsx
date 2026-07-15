import { BrandMark } from '../components/BrandMark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <BrandMark tone="light" />
          <p>
            Industry Compliance &amp; Proficiency Australia. Building competent,
            confident and compliant workforces.
          </p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#courses">Courses</a>
          <a href="#templates">Templates</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="container footer__legal">
        <span>© {new Date().getFullYear()} Industry Compliance &amp; Proficiency Australia</span>
        <span>Training · Assessment · Workforce capability</span>
      </div>
    </footer>
  )
}
