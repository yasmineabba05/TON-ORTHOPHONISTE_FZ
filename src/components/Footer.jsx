import { NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <h4>Les Petits Mots 🐰</h4>
            <p>Cabinet d'orthophonie pour enfants, un espace doux pour apprendre à s'exprimer.</p>
          </div>

          <div className="footer-col">
            <h4>Cabinet</h4>
            {navItems.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a className="contact-item" href="https://wa.me/212783083330" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.315 1.262.494 1.693.63.711.227 1.358.195 1.871.12.571-.09 1.758-.72 2.006-1.41.248-.69.248-1.289.173-1.41-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="contact-text">+212 783-083330</span>
            </a>

            <a className="contact-item" href="mailto:benmlihfzfz@gmail.com" aria-label="Email">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span className="contact-text">benmlihfzfz@gmail.com</span>
            </a>

            <a className="contact-item" href="https://www.instagram.com/ton_orthophoniste_fz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.248.637.416 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.248-1.363.416-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.363-.416 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.567.684-.748 1.15-.137.353-.3.882-.344 1.858-.05 1.054-.06 1.37-.06 4.04 0 2.67.01 2.986.06 4.04.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.684.567 1.15.748.353.137.882.3 1.858.344 1.054.05 1.37.06 4.04.06 2.67 0 2.987-.01 4.04-.06.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.567-.684.748-1.15.137-.353.3-.882.344-1.858.05-1.054.06-1.37.06-4.04 0-2.67-.01-2.986-.06-4.04-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.858-.344-1.053-.05-1.37-.059-4.04-.059zm0 4.594a5.604 5.604 0 1 1 0 11.208 5.604 5.604 0 0 1 0-11.208zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.844-9.884a1.31 1.31 0 1 1-2.62 0 1.31 1.31 0 0 1 2.62 0z" />
                </svg>
              </span>
              <span className="contact-text">Instagram</span>
            </a>

            <a className="contact-item" href="https://www.linkedin.com/in/fatima-zahra-benmlih-a8884743a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="contact-text">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Les Petits Mots — tous droits réservés</span>
          <span>Fait avec 💛 pour les petites voix</span>
        </div>
      </div>
    </footer>
  );
}
