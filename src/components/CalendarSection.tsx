type Props = {
  title: string;
  subtitle: string;
  embedUrl: string;
};

export function CalendarSection({ title, subtitle, embedUrl }: Props) {
  return (
    <section className="content-section" id="calendar">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="calendar-wrap">
          <iframe
            className="calendar-embed"
            src={embedUrl}
            title="VT SASE Events Calendar"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="calendar-fallback">
          Having trouble viewing the embed?{" "}
          <a href={embedUrl} target="_blank" rel="noreferrer">
            Open the calendar in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}
