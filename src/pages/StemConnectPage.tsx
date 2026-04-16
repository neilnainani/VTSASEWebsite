import { useEffect } from "react";
import { siteContent } from "../siteContent";

export function StemConnectPage() {
  const c = siteContent;

  useEffect(() => {
    document.title = c.stemConnectPageTitle;
  }, [c.stemConnectPageTitle]);

  return (
    <section className="content-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{c.stemConnect.kicker}</span>
          <h1>{c.stemConnect.headline}</h1>
          <p>{c.stemConnect.intro}</p>
        </div>

        <div className="card-grid stem-connect-meta">
          <article className="card">
            <h3>Location</h3>
            <p>{c.stemConnect.location}</p>
          </article>
          <article className="card">
            <h3>Dates</h3>
            <p>{c.stemConnect.dates}</p>
          </article>
          <article className="card">
            <h3>Official Website</h3>
            <p>
              <a
                className="stem-connect-link"
                href={c.stemConnect.website}
                target="_blank"
                rel="noreferrer"
              >
                {c.stemConnect.website}
              </a>
            </p>
          </article>
        </div>

        <div className="section-head stem-connect-section-head">
          <h2>Planned Convention Events</h2>
        </div>
        <div className="card-grid">
          {c.stemConnect.plannedEvents.map((event) => (
            <article key={event.title} className="card">
              <h3>{event.title}</h3>
              <p>{event.details}</p>
            </article>
          ))}
        </div>

        <div className="section-head stem-connect-section-head">
          <h2>Companies and Organizations Attending</h2>
        </div>
        <div className="company-grid" aria-label="Attending companies">
          {c.stemConnect.attendingLogos.map((company) => (
            <div key={company.name} className="company-card">
              <img
                src={company.image}
                alt={company.name}
                className="company-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
