import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { OffersSection } from "../components/OffersSection";
import { siteContent } from "../siteContent";

export function HomePage() {
  const c = siteContent;

  useEffect(() => {
    document.title = c.pageTitle;
  }, [c.pageTitle]);

  return (
    <>
      <HeroSection
        kicker={c.hero.kicker}
        headline={c.hero.headline}
        subtext={c.hero.subtext}
        stats={c.stats}
        events={c.upcomingEvents}
        becomeMemberHref={c.links.becomeMember}
        upcomingEventsHref={c.links.upcomingEvents}
      />
      <OffersSection
        title={c.offersIntro.title}
        subtitle={c.offersIntro.subtitle}
        offers={c.offers}
      />
    </>
  );
}
