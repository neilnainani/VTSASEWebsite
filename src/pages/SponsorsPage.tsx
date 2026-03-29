import { useEffect } from "react";
import { siteContent } from "../siteContent";

export function SponsorsPage() {
  const c = siteContent;

  useEffect(() => {
    document.title = c.sponsorsPageTitle;
  }, [c.sponsorsPageTitle]);

  return (
    <section className="content-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{c.sponsors.kicker}</span>
          <h1>{c.sponsors.headline}</h1>
          <p>{c.sponsors.intro}</p>
        </div>

        <div className="sponsor-grid" aria-label="Sponsor logo placeholders">
          {c.sponsors.logos.map((logo, index) => (
            <img
              key={logo}
              className="sponsor-logo"
              src={logo}
              alt={`Sponsor placeholder ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
