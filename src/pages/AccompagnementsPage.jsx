import { domainData } from '../data/siteData';

export default function AccompagnementsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>🧩</span> Domaines d'accompagnement
          </div>
          <h1>
            On travaille <span className="swirl">quoi</span>, exactement ?
          </h1>
          <p>
            Une prise en charge adaptée à l’ensemble des troubles et pathologies relevant de l’orthophonie,
            chez l’enfant, l’adolescent, l’adulte et la personne âgée.
          </p>
          <p>Parmi les problématiques les plus fréquemment accompagnées :</p>

          <div className="quick-nav">
            <a href="#langage">🎈 Troubles du langage oral</a>
            <a href="#lecture">📚 Troubles du langage écrit</a>
            <a href="#confiance">🌈 Troubles de la communication et du neurodéveloppement</a>
          </div>
        </div>
      </section>

      <section className="domains">
        <div className="container">
          {domainData.map((domain, index) => (
            <div className={`domain-block d${index + 2}`} id={domain.id} key={domain.id}>
              <div className="domain-icon">{domain.icon}</div>
              <div className="domain-card">
                <span className="age">{domain.badge}</span>
                <h2>{domain.title}</h2>
                <p className="desc">{domain.description}</p>
                <div className="signs">
                  {domain.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
