import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExecutiveBoardSection } from "../components/ExecutiveBoardSection";
import { siteContent } from "../siteContent";

export function OfficersPage() {
  const c = siteContent;
  const location = useLocation();

  useEffect(() => {
    document.title = c.officersPageTitle;
  }, [c.officersPageTitle]);

  useEffect(() => {
    if (location.hash !== "#join") return;
    requestAnimationFrame(() => {
      document.getElementById("join")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname, location.hash]);

  return (
    <ExecutiveBoardSection
      title={c.boardIntro.title}
      subtitle={c.boardIntro.subtitle}
      officers={c.officers}
      ctaId={c.cta.id}
      ctaTitle={c.cta.title}
      ctaSubtitle={c.cta.subtitle}
      ctaButtonLabel={c.cta.buttonLabel}
      ctaHref={c.links.interestList}
    />
  );
}
