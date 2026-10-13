import { portraitImage } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="portrait">
            <img src={portraitImage} alt="Orthophoniste" className="doctor-image" />
          </div>
          <div>
            <div className="eyebrow">
              <span>👋</span> À propos
            </div>
            <h1>Bonjour, je suis BENMLIH FATIMA ZAHRA</h1>
            <p className="role">Orthophoniste diplômée</p>
            <p className="lead">Au-delà des mots, il y a toujours une histoire.</p>
            <p className="lead">
              Une difficulté à parler, à comprendre, à lire ou à se faire comprendre n’est jamais qu’une simple difficulté. Derrière chaque mot qui ne vient pas, chaque son qui se cherche, chaque phrase qui reste en suspens, il y a une personne qui cherche à être entendue, comprise et reconnue.
            </p>
            <p className="lead">C’est là que commence mon rôle d’orthophoniste.</p>
            <p className="lead">
              Accompagner, travailler sur les mots, redonner confiance, ouvrir des possibilités et permettre à chacun de trouver sa propre manière de communiquer avec le monde.
            </p>
            <div className="tags">
              <span>🎓 Diplômée</span>
              <span>🧸 Approche ludique</span>
              <span>💛 À l'écoute des familles</span>
              <span>🏥 Conventionnée</span>
            </div>
          </div>
        </div>
      </section>

      <section id="parcours">
        <div className="container">
          <div className="section-head">
            <h2>Mon parcours</h2>
            <p>Quelques étapes qui ont construit ma façon d'accompagner les enfants aujourd'hui.</p>
          </div>
          <div className="path">
            <div className="path-item">
              <div className="path-dot">🎓</div>
              <div className="path-year">+6 ans d'expérience</div>
              <h3>Parcours et expertise</h3>
              <ul className="path-list">
                <li>Prise en charge orthophonique de patients de tous âges, de la petite enfance à l'adolescence, à l'âge adulte et auprès de personnes âgées.</li>
                <li>Intervention auprès de patients présentant des profils et des problématiques orthophoniques variés.</li>
                <li>Réalisation de bilans, séances de rééducation et suivis individualisés au cabinet et à domicile.</li>
              </ul>
            </div>
            <div className="path-item">
              <div className="path-dot">📜</div>
              <div className="path-year">CERTIFICATIONS</div>
              <h3>Formations et certificats</h3>
              <ul className="path-list">
                <li>Certificat de formation en communication et interaction chez l’enfant en situation de handicap — Formation animée auprès des éducateurs, en collaboration avec l’Association Attadamoun...</li>
                <li>Certificat de formation en pratiques éducatives non violentes et gestion des comportements chez l’enfant — Formation animée sur les alternatives à la punition physique...</li>
                <li>Certificat de formation en accompagnement et activités auprès des enfants en situation de handicap — Programme de trois jours d’activités et d’accompagnement, organisé par l’Association Merci.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="approche">
        <div className="container values-bg" style={{ padding: '60px 40px' }}>
          <div className="section-head">
            <h2>Mon approche en 3 mots</h2>
            <p>Ce qui guide chaque séance, quel que soit l'âge ou la difficulté de l'enfant.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🧸</div>
              <h3>Le jeu avant tout</h3>
              <p>On progresse mieux quand on ne se rend pas compte qu'on travaille. Chaque exercice est déguisé en jeu.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💛</div>
              <h3>Zéro pression</h3>
              <p>Pas de comparaison, pas de note. Chaque enfant avance à son propre rythme, on célèbre chaque petit progrès.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Avec les familles</h3>
              <p>Les parents sont de vrais partenaires du suivi : explications claires et points réguliers sur les avancées.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="citation">
        <div className="container">
          <div className="quote-block">
            <span className="mark">"</span>
            <p>Chaque enfant a déjà les mots en lui. Mon travail, c'est de l'aider à les trouver et surtout à oser les dire.</p>
            <span>— Fatima Zahra, orthophoniste</span>
          </div>
        </div>
      </section>
    </>
  );
}
