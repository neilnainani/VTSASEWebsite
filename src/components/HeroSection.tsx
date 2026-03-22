import type { EventItem, Stat } from "../siteContent";

type Props = {
  kicker: string;
  headline: string;
  subtext: string;
  stats: Stat[];
  events: EventItem[];
  becomeMemberHref: string;
  upcomingEventsHref: string;
};

export function HeroSection({
  kicker,
  headline,
  subtext,
  stats,
  events,
  becomeMemberHref,
  upcomingEventsHref,
}: Props) {
  return (
    <section className="hero" id="events">
      <div className="container hero-grid">
        <div>
          <span className="kicker">{kicker}</span>
          <h1>{headline}</h1>
          <p className="hero-text">{subtext}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={becomeMemberHref}>
              Become a Member
            </a>
            <a className="btn btn-secondary" href={upcomingEventsHref}>
              See Upcoming Events
            </a>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <article className="stat" key={s.label}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-card" aria-labelledby="highlights-heading">
          <h3 id="highlights-heading">Upcoming Highlights</h3>
          {events.map((ev) => (
            <article className="event" key={ev.title}>
              {ev.link ? (
                <a href={ev.link} className="event-link" target="_blank" rel="noreferrer">
                  <strong>{ev.title}</strong>
                  <span>{ev.whenWhere}</span>
                </a>
              ) : (
                <>
                  <strong>{ev.title}</strong>
                  <span>{ev.whenWhere}</span>
                </>
              )}
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
