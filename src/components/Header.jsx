import { useState } from 'react'
import { event, navItems } from '../data/content.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img src="./gatherloop-mark.svg" alt="" width="36" height="36" />
          <span>{event.shortName}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href="#tickets">
          Get your tickets
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? 'bar bar-top open' : 'bar bar-top'} />
          <span className={menuOpen ? 'bar bar-middle open' : 'bar bar-middle'} />
          <span className={menuOpen ? 'bar bar-bottom open' : 'bar bar-bottom'} />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#tickets" onClick={() => setMenuOpen(false)}>
          Get your tickets
        </a>
      </nav>
    </header>
  )
}
