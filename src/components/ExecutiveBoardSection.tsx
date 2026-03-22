import type { Officer } from "../siteContent";

type Props = {
  title: string;
  subtitle: string;
  officers: Officer[];
  ctaId: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonLabel: string;
  ctaHref: string;
};

export function ExecutiveBoardSection({
  title,
  subtitle,
  officers,
  ctaId,
  ctaTitle,
  ctaSubtitle,
  ctaButtonLabel,
  ctaHref,
}: Props) {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-head">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="people">
          {officers.map((person) => (
            <article className="person" key={person.name}>
              {person.link ? (
                <a href={person.link} target="_blank" rel="noreferrer">
                  <div className="avatar" aria-hidden>
                    {person.photoUrl ? (
                      <img src={person.photoUrl} alt={person.name} width={56} height={56} />
                    ) : (
                      person.initials
                    )}
                  </div>
                  <strong>{person.name}</strong>
                  <span className="role">{person.role}</span>
                </a>
              ) : (
                <>
                  <div className="avatar" aria-hidden>
                    {person.photoUrl ? (
                      <img src={person.photoUrl} alt={person.name} width={56} height={56} />
                    ) : (
                      person.initials
                    )}
                  </div>
                  <strong>{person.name}</strong>
                  <span className="role">{person.role}</span>
                </>
              )}
            </article>
          ))}
        </div>

        <div className="cta" id={ctaId}>
          <h2>{ctaTitle}</h2>
          <p>{ctaSubtitle}</p>
          <a className="btn btn-primary" href={ctaHref}>
            {ctaButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
