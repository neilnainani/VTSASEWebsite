/**
 * VT SASE — edit this file to make the site "real".
 * See CONTENT.md in the project root for image/link conventions.
 */

export type NavItem = { label: string; href: string };

export type EventItem = {
  title: string;
  /** e.g. "March 28 • Goodwin Hall" */
  whenWhere: string;
  /** Optional link to RSVP, Google Calendar, Instagram post, etc. */
  link?: string;
};

export type OfferCard = {
  title: string;
  body: string;
  pill: string;
  highlight?: boolean;
};

export type Officer = {
  name: string;
  role: string;
  /** Initials shown if photoUrl is not set */
  initials: string;
  /** Put files in /public/images/officers/ and use "/images/officers/jane-doe.jpg" */
  photoUrl?: string;
  /** LinkedIn or personal site */
  link?: string;
};

export type Stat = { value: string; label: string };

export const siteContent = {
  /** Shown in browser tab on the home page */
  pageTitle: "VT SASE | Society of Asian Scientists and Engineers",

  /** Browser tab title for /officers */
  officersPageTitle: "Meet The Officers | VT SASE",

  /** Optional: logo in header. Add `public/images/logo.png` then set to "/images/logo.png" */
  headerLogoUrl: undefined as string | undefined,
  brandName: "SASE @ Virginia Tech",

  nav: [
    { label: "Home", href: "/" },
    //{ label: "About", href: "/#about" },
    //{ label: "Events", href: "/#events" },
    //{ label: "Mentorship", href: "/#mentorship" },
    { label: "Meet The Officers", href: "/officers" },
    //{ label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],

  links: {
    /** Top-right "Join" button — scrolls to CTA on /officers */
    join: "https://docs.google.com/forms/d/e/1FAIpQLSfz3o0Cuit66uW2RSxfILG8SYA-U75p7J7MDbzActnQ64orkw/viewform",
    /** Primary hero CTA */
    becomeMember: "https://docs.google.com/forms/d/e/1FAIpQLSfz3o0Cuit66uW2RSxfILG8SYA-U75p7J7MDbzActnQ64orkw/viewform",
    /** Secondary hero CTA — e.g. link to GCal, Linktree, or /events page */
    upcomingEvents: "https://outlook.office365.com/calendar/published/e573b46dfb0441f6a274bbdf120e6f74@vt.edu/a9f440afabde4f8c85fe898e20c7b0225774460270219054877/calendar.html",
    /** CTA banner at bottom */
    interestList: "https://docs.google.com/forms/d/e/1FAIpQLSdypKK1jSJcEu8BatttEgoQABZL3zNiKb203nyjxXZxrSDCpw/viewform",
    /** Footer email (use mailto: for clickable email) */
    email: "mailto:vtsase@gmail.com",
    /** Add Instagram, LinkedIn, Discord, etc. */
    social: {
      instagram: "https://www.instagram.com/saseatvt",
      linkedin: "https://linkedin.com/company/sase-at-virginia-tech",
      discord: "https://discord.com/invite/r7mqCEyQT4",
    },
  },

  hero: {
    kicker: "Empower • Connect • Lead",
    headline:
      "Building the next generation of Asian STEM leaders at Virginia Tech.",
    subtext:
      "We are a student-led community that supports professional growth, inclusive leadership, and meaningful friendships through workshops, corporate networking, and social events.",
  },

  stats: [
    { value: "120+", label: "Active members" },
    { value: "18", label: "Events per semester" },
    { value: "25+", label: "Company connections" },
  ] satisfies Stat[],

  upcomingEvents: [
    {
      title: "St. Patrick's Day Potluck",
      whenWhere: "March 24 • Goodwin Hall",
      link: undefined,
    },
    {
      title: "SASE Science Week",
      whenWhere: "March 30 - April 3",
    },
    {
      title: "Mentor Mentee Bonding Week",
      whenWhere: "April 6 - April 10",
    },
  ] satisfies EventItem[],

  offersIntro: {
    title: "What VT SASE Offers",
    subtitle:
      "Programs designed to help Hokies thrive academically, professionally, and socially.",
  },

  offers: [
    {
      title: "Professional Development",
      body: "Career prep workshops, interview practice, and internship recruiting support for students in engineering, computing, and sciences.",
      pill: "Career Growth",
      highlight: true,
    },
    {
      title: "Mentorship",
      body: "Peer and alumni mentorship that helps members navigate classes, leadership opportunities, and post-grad decisions.",
      pill: "Community",
    },
    {
      title: "Cultural + Social Events",
      body: "Fun, welcoming gatherings that celebrate identity, build confidence, and create lasting friendships at VT.",
      pill: "Belonging",
    },
  ] satisfies OfferCard[],

  boardIntro: {
    title: "Meet The Officers",
  },

  officers: [
    { name: "Deya Singh", role: "President", initials: "DS" },
    { name: "Isabelle Vu", role: "Media Vice President", initials: "IV" },
    { name: "Jairaj Sharma", role: "External Vice President", initials: "JS" },
    { name: "Ritisha Ghimire Kshetri", role: "Internal Vice President", initials: "RGK" },
    //{ name: "Ritisha Ghimire Kshetri", role: "Internal Vice President", initials: "RGK" },
  ] satisfies Officer[],

  cta: {
    id: "join",
    title: "Ready to join VT SASE?",
    subtitle:
      "All majors and backgrounds are welcome. Come grow your network and leadership skills.",
    buttonLabel: "Join Our Interest List",
  },

  footer: {
    line:
      "Society of Asian Scientists and Engineers @ Virginia Tech • Blacksburg, VA",
    /** Shown next to / below the line; uses links.email if set */
    emailDisplay: "vtsase@gmail.com",
  },
};
