import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="dot" />
          Les Petits Mots
        </NavLink>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          {navItems.filter((item) => item.to !== '/contact').map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
            Rendez-vous
          </NavLink>
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
