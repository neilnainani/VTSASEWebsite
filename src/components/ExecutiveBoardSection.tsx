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
  const placeholderHeadshot = "/images/officers/placeholder-headshot.svg";

  const byRoles = (roles: string[]) =>
    officers.filter((person) => roles.includes(person.role));

  const presidentGroup = byRoles(["President", "External Vice President", "Internal Vice President", "Media Vice President"]);
  const secretaryTreasurerGroup = byRoles(["Secretary", "Treasurer"]);
  const externalGroup = byRoles([
    "External Task Force",
    "Service Chair",
  ]);
  const mediaGroup = byRoles([
    "Historian",
    "Public Relations",
    "Webmaster",
  ]);
  const internalGroup = byRoles( ["Internal Task Force"]);

  const renderPeople = (group: Officer[]) => (
    <div className="people">
      {group.map((person, index) => (
        <article className="person" key={`${person.name}-${person.role}-${index}`}>
          {person.link ? (
            <a href={person.link} target="_blank" rel="noreferrer">
              <div className="avatar" aria-hidden>
                <img
                  src={person.photoUrl ?? placeholderHeadshot}
                  alt={`${person.name} headshot`}
                  width={56}
                  height={56}
                  onError={(event) => {
                    if (event.currentTarget.src.endsWith(placeholderHeadshot)) return;
                    event.currentTarget.src = placeholderHeadshot;
                  }}
                />
              </div>
              <strong>{person.name}</strong>
              <span className="role">{person.role}</span>
            </a>
          ) : (
            <>
              <div className="avatar" aria-hidden>
                <img
                  src={person.photoUrl ?? placeholderHeadshot}
                  alt={`${person.name} headshot`}
                  width={56}
                  height={56}
                  onError={(event) => {
                    if (event.currentTarget.src.endsWith(placeholderHeadshot)) return;
                    event.currentTarget.src = placeholderHeadshot;
                  }}
                />
              </div>
              <strong>{person.name}</strong>
              <span className="role">{person.role}</span>
            </>
          )}
        </article>
      ))}
    </div>
  );

  return (
    <section className="content-section">
      <div className="container">
        <div className="section-head">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        {presidentGroup.length > 0 && <div className="officer-group">{renderPeople(presidentGroup)}</div>}

        {secretaryTreasurerGroup.length > 0 && (
          <div className="officer-group">{renderPeople(secretaryTreasurerGroup)}</div>
        )}

        {externalGroup.length > 0 && (
          <div className="officer-group">
            <h2 className="officer-group-title">External</h2>
            {renderPeople(externalGroup)}
          </div>
        )}

        {mediaGroup.length > 0 && (
          <div className="officer-group">
            <h2 className="officer-group-title">Media</h2>
            {renderPeople(mediaGroup)}
          </div>
        )}

        {internalGroup.length > 0 && (
          <div className="officer-group">
            <h2 className="officer-group-title">Internal</h2>
            {renderPeople(internalGroup)}
          </div>
        )}

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
