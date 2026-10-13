import { NavLink } from 'react-router-dom';
import { careCards, portraitImage, steps, stripItems, testimonials } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              <span className="emoji">✨</span> Cabinet d'orthophonie pour tous les âges
            </div>
            <h1>
              Aider votre enfant à trouver <span className="swirl">les mots justes</span>, en douceur
            </h1>
            <p className="lead">
              Un accompagnement bienveillant et joueur pour le langage, la lecture et la confiance en soi — dans un cabinet pensé pour donner envie de parler.
            </p>
            <div className="hero-ctas">
              <NavLink to="/contact" className="btn-primary">
                Prendre rendez-vous 🐰
              </NavLink>
              <NavLink to="/accompagnements" className="btn-ghost">
                Découvrir nos accompagnements
              </NavLink>
            </div>
            <div className="trust-row">
              <span className="stars">★★★★★</span>
              <span>Recommandé par plus de 120 familles</span>
            </div>
          </div>

          <div className="hero-visual">
            <img className="mascotte" src={portraitImage} alt="Portrait orthophoniste" width="320" height="320" />
          </div>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...stripItems, ...stripItems].map((item, idx) => (
            <span key={`${item}-${idx}`}>{item}</span>
          ))}
        </div>
      </div>

      <section id="etapes">
        <div className="container">
          <div className="section-head">
            <div
              className="eyebrow"
              style={{
                background: 'var(--pink-soft)',
                color: '#c2447a',
                display: 'inline-flex',
                margin: '0 auto 16px',
              }}
            >
              <span className="emoji">🐣</span> Premier rendez-vous
            </div>
            <h2>Une première séance toute douce</h2>
            <p>Pas de stress : on prend le temps de faire connaissance avant de commencer le vrai travail.</p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-num">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="accompagnements">
        <div className="container cards-bg" style={{ padding: '64px 44px' }}>
          <div className="section-head">
            <h2>Ce qu'on peut travailler ensemble</h2>
            <p>Chaque enfant avance à son rythme — voici les principaux domaines d'accompagnement du cabinet.</p>
          </div>
          <div className="cards">
            {careCards.map((card) => (
              <div className="care-card" key={card.title}>
                <div className="care-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <NavLink className="see-more" to="/accompagnements">
            Voir tous les accompagnements
          </NavLink>
        </div>
      </section>

      <section id="apropos">
        <div className="container about">
          <div className="about-photo">
            <img src={portraitImage} alt="Portrait de l'orthophoniste" className="about-photo-img" />
          </div>
          <div>
            <div className="eyebrow" style={{ background: 'var(--lavender-soft)', color: '#5d4bb0' }}>
              <NavLink to="/apropos" style={{ color: '#5d4bb0', textDecoration: 'none' }}>
                L'orthophoniste
              </NavLink>
            </div>
            <h2>Bonjour, BENMLIH FATIMA ZAHRA</h2>
            <p>
              Orthophoniste diplômée, j'accompagne les enfants et leurs familles avec écoute et bonne humeur. Mon objectif : que chaque petit patient reparte du cabinet avec le sourire, un peu plus sûr de sa voix.
            </p>
            <p>
              Je crois qu'on progresse mieux en jouant : mes séances mêlent jeux, histoires et petites victoires du quotidien.
            </p>
            <div className="about-tags">
              <span>🎓 Diplômée d'État</span>
              <span>🧸 Approche ludique</span>
              <span>💛 À l'écoute des familles</span>
            </div>
            <NavLink className="btn-ghost" to="/apropos" style={{ display: 'inline-block', marginTop: '24px' }}>
              En savoir plus
            </NavLink>
          </div>
        </div>
      </section>

      <section id="avis">
        <div className="container">
          <div className="section-head">
            <h2>Ce que disent les familles</h2>
            <p>Le meilleur retour, c'est un enfant qui a hâte de venir à sa séance.</p>
          </div>
          <div className="testimonials">
            {testimonials.slice(0, 3).map((review) => (
              <div className="testi-card" key={review.author}>
                <div className="stars">★★★★★</div>
                <p>"{review.text}"</p>
                <div className="testi-name">— {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section" aria-labelledby="location-title">
        <div className="container location-grid">
          <div className="location-copy">
            <div className="eyebrow">
              <span>📍</span> Localisation
            </div>
            <h2 id="location-title">Nous trouver à Casablanca</h2>
            <p>D8, Résidence Assalam, Route Oueld Zian, Casablanca</p>
            <NavLink className="btn-primary" to="/contact">
              Nous contacter
            </NavLink>
          </div>
          <div className="location-map">
            <iframe
              title="Carte du cabinet, D8 Résidence Assalam, Route Oueld Zian, Casablanca"
              src="https://www.google.com/maps?q=D8%2C%20R%C3%A9sidence%20Assalam%2C%20Route%20Oueld%20Zian%2C%20Casablanca%2C%20Morocco&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
