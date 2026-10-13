import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [age, setAge] = useState('');
  const [motif, setMotif] = useState('');
  const [autreMotif, setAutreMotif] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    form.reset();
    setAge('');
    setMotif('');
    setAutreMotif('');
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>📅</span> Réservation en ligne
          </div>
          <h1>
            On prend <span className="swirl">rendez-vous</span> ensemble ?
          </h1>
          <p>
            Remplissez le formulaire ci-dessous : je vous recontacte sous 24h ouvrées pour confirmer le créneau. Le premier échange est sans engagement.
          </p>
          <div className="float-deco fd2">💛 sans stress</div>
        </div>
      </section>

      <section className="rdv-section">
        <div className="container rdv-grid">
          <div className="card form-card">
            <h2>Vos informations</h2>
            <p className="sub">Quelques infos pour préparer au mieux la première rencontre.</p>

            <form id="rdv-form" onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>👨‍👩‍👧 Vous</legend>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="parent-nom">Nom et prénom</label>
                    <input type="text" id="parent-nom" name="parent-nom" placeholder="Ex. Camille Dupont" required />
                  </div>
                  <div className="field">
                    <label htmlFor="parent-tel">Téléphone</label>
                    <input type="tel" id="parent-tel" name="parent-tel" placeholder="06 12 34 56 78" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="parent-email">E-mail <small>(facultatif)</small></label>
                  <input type="email" id="parent-email" name="parent-email" placeholder="Ex. camille@gmail.com" autoComplete="email" />
                </div>
              </fieldset>

              <fieldset>
                <legend>🧒 L'enfant</legend>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="enfant-prenom">Prénom</label>
                    <input type="text" id="enfant-prenom" name="enfant-prenom" placeholder="Ex. Lina" required />
                  </div>
                  <div className="field">
                    <label>Âge</label>
                    <div className="chip-group" role="radiogroup" aria-label="Âge de l'enfant">
                      {['3-5 ans', '6-8 ans', '9-12 ans'].map((value) => (
                        <div className="chip" key={value}>
                          <input type="radio" name="age" id={`age-${value}`} value={value} checked={age === value} onChange={() => setAge(value)} required />
                          <label className="chip-label" htmlFor={`age-${value}`}>{value}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>💬 Le motif de la consultation</legend>
                <div className="field">
                  <label htmlFor="motif">Quelle difficulté observez-vous ?</label>
                  <select id="motif" name="motif" value={motif} onChange={(event) => setMotif(event.target.value)} required>
                    <option value="" disabled>Choisissez un motif</option>
                    <option value="Articulation / prononciation">Articulation / prononciation</option>
                    <option value="Langage oral">Langage oral</option>
                    <option value="Lecture & écriture">Lecture & écriture</option>
                    <option value="Bégaiement">Bégaiement</option>
                    <option value="Confiance en soi à l'oral">Confiance en soi à l'oral</option>
                    <option value="Autre">Je ne sais pas encore</option>
                  </select>
                  {motif === 'Autre' && (
                    <input
                      type="text"
                      className="autre-champ"
                      placeholder="Précisez votre choix"
                      value={autreMotif}
                      onChange={(event) => setAutreMotif(event.target.value)}
                      required
                    />
                  )}
                </div>
                <div className="field full">
                  <label htmlFor="message">Décrivez en quelques mots</label>
                  <textarea id="message" name="message" placeholder="Ex. Mon fils confond certains sons, l'école nous a conseillé de consulter..." required></textarea>
                </div>
              </fieldset>

              <div className="submit-row">
                <button type="submit" className="btn-primary" id="submit-btn">
                  Envoyer ma demande
                </button>
                <span className="form-note">Réponse sous 24h ouvrées.</span>
              </div>

              {submitted && (
                <div className="confirm-msg" id="confirm-msg">
                  <span>🎉</span>
                  <span>Merci ! Votre demande a bien été envoyée, je reviens vers vous très vite.</span>
                </div>
              )}
            </form>
          </div>

          <div className="side-col">
            <div className="card info-card">
              <h3>Le cabinet</h3>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <strong>Adresse</strong>
                    <span>CASABLANCA</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <strong>Téléphone</strong>
                    <span>+212 783-083330</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕘</div>
                  <div>
                    <strong>Horaires</strong>
                    <span>Lun-Ven, 9h-18h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card highlight-card">
              <h3>💡 Bon à savoir</h3>
              <p>Le premier rendez-vous dure environ 30 minutes. Pensez à apporter le dernier bulletin scolaire et un éventuel avis médical.</p>
            </div>

            <div className="card faq-card">
              <h3>Questions fréquentes</h3>
              <details>
                <summary>Faut-il une ordonnance ?</summary>
                <p>Une prescription médicale est recommandée pour le remboursement, mais un premier échange sans ordonnance est possible.</p>
              </details>
              <details>
                <summary>Puis-je annuler un rendez-vous ?</summary>
                <p>Oui, merci de prévenir au moins 24h à l'avance par téléphone ou e-mail.</p>
              </details>
              <details>
                <summary>Êtes-vous conventionné(e) ?</summary>
                <p>Oui, les séances sont prises en charge par l'Assurance Maladie sur prescription.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
