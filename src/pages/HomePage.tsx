import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { CalendarSection } from "../components/CalendarSection";
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
      <CalendarSection
        title="Convention + Chapter Calendar"
        subtitle="Stay up to date with upcoming VT SASE events, workshops, and important dates."
        embedUrl={c.links.upcomingEvents}
      />
      <OffersSection
        title={c.offersIntro.title}
        subtitle={c.offersIntro.subtitle}
        offers={c.offers}
      />
    </>
  );
}
