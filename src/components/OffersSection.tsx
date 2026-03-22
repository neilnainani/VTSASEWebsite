import type { OfferCard } from "../siteContent";

type Props = {
  title: string;
  subtitle: string;
  offers: OfferCard[];
};

export function OffersSection({ title, subtitle, offers }: Props) {
  return (
    <section className="content-section" id="about">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="card-grid">
          {offers.map((card) => (
            <article
              className={`card${card.highlight ? " highlight" : ""}`}
              key={card.title}
              id={card.title === "Mentorship" ? "mentorship" : undefined}
            >
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="pill">{card.pill}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
