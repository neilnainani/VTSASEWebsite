type Props = {
  line: string;
  emailDisplay: string;
  emailHref: string;
  social: {
    instagram?: string;
    linkedin?: string;
    discord?: string;
  };
};

export function SiteFooter({ line, emailDisplay, emailHref, social }: Props) {
  const items = [
    social.instagram && { label: "Instagram", href: social.instagram },
    social.linkedin && { label: "LinkedIn", href: social.linkedin },
    social.discord && { label: "Discord", href: social.discord },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer id="contact">
      <div className="container">
        <p>
          {line} •{" "}
          <a href={emailHref}>{emailDisplay}</a>
        </p>
        {items.length > 0 && (
          <div className="footer-social">
            {items.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
