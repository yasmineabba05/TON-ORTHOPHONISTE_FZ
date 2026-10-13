import { useState } from 'react';
import { testimonials } from '../data/siteData';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(testimonials);
  const [rating, setRating] = useState(5);
  const [motif, setMotif] = useState('');
  const [autreMotif, setAutreMotif] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const parentName = formData.get('parent-nom')?.toString().trim() || 'Famille';
    const childInfo = formData.get('enfant-info')?.toString().trim();
    const reviewText = formData.get('avis-texte')?.toString().trim();
    const tag = motif === 'Autre' ? (autreMotif || 'Autre') : motif || 'Expérience';

    const newReview = {
      author: `${parentName}${childInfo ? `, parent de ${childInfo}` : ''}`,
      text: reviewText,
      tag,
      color: 'var(--pink)',
    };

    setReviews((current) => [newReview, ...current]);
    setSubmitted(true);
    form.reset();
    setRating(5);
    setMotif('');
    setAutreMotif('');
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>💬</span> Paroles de familles
          </div>
          <h1>
            Ce que <span className="swirl">disent</span> les familles
          </h1>
          <p>
            Le meilleur retour, c'est un enfant qui a hâte de venir à sa séance. Merci à toutes les
            familles qui prennent le temps de partager leur expérience.
          </p>

          <div className="score-row">
            <div className="score-pill">
              <span className="num">4,9/5</span>
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span className="count">· {reviews.length} avis</span>
            </div>
          </div>
        </div>
      </section>

      <section id="temoignages">
        <div className="container">
          <div className="section-head">
            <h2>Derniers avis</h2>
            <p>Une sélection de retours laissés par les parents.</p>
          </div>

          <div className="reviews-grid" id="reviews-grid">
            {reviews.map((review, index) => (
              <div className="review-card" key={`${review.author}-${index}`}>
                <div className="review-top">
                  <div className="avatar" style={{ background: review.color || 'var(--pink)' }}>
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="review-name">{review.author}</div>
                    <div className="review-meta">Il y a quelques jours</div>
                  </div>
                </div>
                <div className="review-stars">★★★★★</div>
                <p className="body">{review.text}</p>
                <span className="review-tag">{review.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="laisser-avis">
        <div className="container form-bg" style={{ padding: '60px 24px' }}>
          <div className="review-form-wrap">
            <h2>Votre expérience compte 🌸</h2>
            <p className="sub">Vous avez consulté au cabinet ? Partagez votre avis pour aider d'autres familles.</p>

            <form id="review-form" onSubmit={handleSubmit} noValidate>
              <fieldset style={{ border: 'none' }}>
                <div className="star-picker" role="radiogroup" aria-label="Votre note">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <label key={score} className={rating >= score ? 'active' : ''}>
                      <input
                        type="radio"
                        name="note"
                        value={score}
                        checked={rating === score}
                        onChange={() => setRating(score)}
                      />
                      <span>★</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field-row">
                <div className="field">
                  <label className="field-label" htmlFor="parent-nom">Votre nom</label>
                  <input type="text" id="parent-nom" name="parent-nom" placeholder="Ex. Camille D." required />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="enfant-info">Enfant suivi</label>
                  <input type="text" id="enfant-info" name="enfant-info" placeholder="Ex. Lina, 6 ans" />
                </div>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="motif">Domaine travaillé</label>
                <select id="motif" name="motif" value={motif} onChange={(event) => setMotif(event.target.value)} required>
                  <option value="" disabled>
                    Choisissez un domaine
                  </option>
                  <option value="Articulation">Articulation</option>
                  <option value="Langage oral">Langage oral</option>
                  <option value="Lecture & écriture">Lecture & écriture</option>
                  <option value="Bégaiement">Bégaiement</option>
                  <option value="Confiance en soi">Confiance en soi</option>
                  <option value="Autre">Autre</option>
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

              <div className="field">
                <label className="field-label" htmlFor="avis-texte">Votre avis</label>
                <textarea id="avis-texte" name="avis-texte" placeholder="Racontez votre expérience au cabinet..." required></textarea>
              </div>

              <button type="submit" className="submit-btn">Envoyer mon avis 💌</button>

              <p className="form-note">Votre avis sera publié automatiquement ci-dessus, sur cette page, pour toutes les familles qui la consultent.</p>

              {submitted && (
                <div className="confirm-msg" id="confirm-msg">
                  <span>🎉</span>
                  <span>Merci pour votre retour, il vient d'être publié !</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
