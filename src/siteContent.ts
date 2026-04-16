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
  /** Optional initials for legacy data; placeholder image is shown when photoUrl is missing */
  initials?: string;
  /** Put files in /public/images/officers/ and use "/images/officers/jane-doe.jpg" */
  photoUrl?: string;
  /** LinkedIn or personal site */
  link?: string;
};

export type Stat = { value: string; label: string };
export type ConventionEvent = {
  title: string;
  details: string;
};
export type ConventionLogo = {
  name: string;
  image: string;
};

export const siteContent = {
  /** Shown in browser tab on the home page */
  pageTitle: "VT SASE | Society of Asian Scientists and Engineers",

  /** Browser tab title for /about */
  aboutPageTitle: "About Us | VT SASE",

  /** Browser tab title for /officers */
  officersPageTitle: "Meet The Officers | VT SASE",
  /** Browser tab title for /sponsors */
  sponsorsPageTitle: "Sponsors | VT SASE",
  /** Browser tab title for /stem-connect */
  stemConnectPageTitle: "STEM Connect Convention | VT SASE",

  /** Optional: logo in header. Add `public/images/logo.png` then set to "/images/logo.png" */
  headerLogoUrl: undefined as string | undefined,
  brandName: "SASE @ Virginia Tech",

  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "STEM Connect", href: "/stem-connect" },
    { label: "Sponsors", href: "/sponsors" },
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
      title: "Run For Remembrance",
      whenWhere: "April 18 • War Memorial Hall",
      link: undefined,
    },
    {
      title: "The Big Clean",
      whenWhere: "April 20",
    },
    {
      title: "Relay For Life",
      whenWhere: "April 24",
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

  about: {
    kicker: "Who We Are",
    headline: "About Us",
    intro:
      `SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential.

Through social events and professional development workshops with various companies, SASE encourages members to form lasting friendships, experience professional and personal growth, and contribute to our community. SASE also offers a mentorship program, service opportunities, and scholarships!

SASE's mission is to:
- Prepare scientists and engineers of Asian heritage for success in the global business world.
- Celebrate diversity on campuses and in the workplace.
- Provide opportunities for members to make contributions to their local communities.
- Help members network and meet new people.

SASE is open to students of all genders, majors, and ethnic backgrounds. Everyone is welcome! If you want to develop both professionally and socially, this is the student organization for you!`,
    sections: [
      {
        title: "Our Mission",
        body: "We empower members to develop professionally, lead with purpose, and uplift each other through mentorship and collaboration.",
      },
      {
        title: "What We Do",
        body: "From technical workshops to company events to service opportunities and mentor programs, we provide practical resources and a strong support network.",
      },
      {
        title: "Who We Serve",
        body: "All majors and backgrounds are welcome. We celebrate diversity and create an inclusive home for anyone interested in growth, service, and connection.",
      },
    ],
  },

  boardIntro: {
    title: "Meet The Officers",
  },

  sponsors: {
    kicker: "Our Partners",
    headline: "Sponsors who support VT SASE.",
    intro:
    `The Virginia Tech SASE Chapter works to grow a safe and inclusive environment for our members while also creating career development opportunities for our members in preparation for navigating the professional world. If you would like to help further our goals, please consider becoming a sponsor today!`,
    logos: [
      "public/images/Texas-Instruments-Logo.png",
      "public/images/SMECO-Logo.png",
      "public/images/CMTA-1024x380.jpg",
      "public/images/CAT-logo.png",
      "public/images/Altec-Color.png",
      "public/images/ABB_logo.svg_-1024x406.png",
    ],
  },

  stemConnect: {
    kicker: "National Convention",
    headline: "STEM Connect Convention 2026",
    intro:
      "VT SASE is heading to STEM Connect for three days of professional development, networking, and leadership programming with students, industry partners, and university teams from across the country.",
    website: "https://stemconnect.events",
    location: "Seattle, Washington",
    dates: "October 1st-3rd",
    plannedEvents: [
      {
        title: "Opening Ceremony and Keynote",
        details:
          "Kick off the convention with opening remarks and featured speakers discussing innovation, leadership, and emerging opportunities in STEM.",
      },
      {
        title: "Career Fair and Employer Networking",
        details:
          "Connect directly with recruiters and engineering leaders during dedicated networking and recruiting sessions.",
      },
      {
        title: "Technical and Professional Development Workshops",
        details:
          "Attend workshops focused on interview preparation, internship strategies, graduate pathways, and technical growth.",
      },
      {
        title: "Leadership and Community Sessions",
        details:
          "Participate in chapter leadership tracks, mentorship conversations, and community-building discussions with peers nationwide.",
      },
    ] satisfies ConventionEvent[],
    attendingLogos: [
      { name: "Actalent", image: "/images/stem-connect/actalent.png" },
      { name: "Blue Origin", image: "/images/stem-connect/blue-origin.png" },
      { name: "BNSF Railway", image: "/images/stem-connect/bnsf-railway.png" },
      { name: "Burns & McDonnell", image: "/images/stem-connect/burns-mcdonnell.png" },
      { name: "Chemours", image: "/images/stem-connect/chemours.png" },
      { name: "Chevron", image: "/images/stem-connect/chevron.png" },
      { name: "Colorado School of Mines", image: "/images/stem-connect/colorado-school-of-mines.png" },
      { name: "Columbia Engineering", image: "/images/stem-connect/columbia-engineering.png" },
      { name: "Constellation", image: "/images/stem-connect/constellation.png" },
      { name: "Esri", image: "/images/stem-connect/esri.png" },
      { name: "Exelon", image: "/images/stem-connect/exelon.png" },
      { name: "FIU Engineering and Computing", image: "/images/stem-connect/fiu-engineering.png" },
      { name: "FM", image: "/images/stem-connect/fm.png" },
      { name: "GE Aerospace", image: "/images/stem-connect/ge-aerospace.png" },
      { name: "GE Vernova", image: "/images/stem-connect/ge-vernova.png" },
      { name: "Gies College of Business", image: "/images/stem-connect/gies-college.png" },
      { name: "Granite", image: "/images/stem-connect/granite.png" },
      { name: "Honeywell", image: "/images/stem-connect/honeywell.png" },
      { name: "Lehigh University", image: "/images/stem-connect/lehigh-university.png" },
      { name: "Leidos", image: "/images/stem-connect/leidos.png" },
      { name: "Mortenson", image: "/images/stem-connect/mortenson.png" },
      { name: "New York ISO", image: "/images/stem-connect/new-york-iso.png" },
      { name: "NYU Tandon School of Engineering", image: "/images/stem-connect/nyu-tandon.png" },
      { name: "SRMC", image: "/images/stem-connect/srmc.png" },
      { name: "Shell", image: "/images/stem-connect/shell.png" },
      { name: "Southwire", image: "/images/stem-connect/southwire.png" },
      { name: "Texas Department of Transportation", image: "/images/stem-connect/txdot.png" },
      { name: "Mosaic", image: "/images/stem-connect/mosaic.png" },
      { name: "Turner", image: "/images/stem-connect/turner.png" },
      { name: "University of Pittsburgh Swanson School of Engineering", image: "/images/stem-connect/pitt-swanson.png" },
      { name: "USC Viterbi School of Engineering", image: "/images/stem-connect/usc-viterbi.png" },
      { name: "Wabtec", image: "/images/stem-connect/wabtec.png" },
      { name: "WWT (World Wide Technology)", image: "/images/stem-connect/wwt.png" },
    ] satisfies ConventionLogo[],
  },

  officers: [
    { name: "Deya Singh", role: "President", initials: "DS", photoUrl: "/images/officers/deya-singh.jpg" },
    { name: "Isabelle Vu", role: "Media Vice President", initials: "IV", photoUrl: "/images/officers/isabelle-vu.jpg" },
    { name: "Jairaj Sharma", role: "External Vice President", initials: "JS", photoUrl: "/images/officers/jairaj-sharma.jpg" },
    { name: "Ritisha Ghimire Kshetri", role: "Internal Vice President", initials: "RGK", photoUrl: "/images/officers/ritisha-ghimire-kshetri.jpg" },
    { name: "Placeholder", role: "External Task Force", initials: "P" },
    { name: "Placeholder", role: "External Task Force", initials: "P" },
    { name: "Placeholder", role: "Service Chair", initials: "P" },
    { name: "Placeholder", role: "Service Chair", initials: "P" },
    { name: "Placeholder", role: "Treasurer", initials: "P" },
    { name: "Placeholder", role: "Secretary", initials: "P" },
    { name: "Placeholder", role: "Internal Task Force", initials: "P" },
    { name: "Placeholder", role: "Internal Task Force", initials: "P" },
    { name: "Placeholder", role: "Public Relations", initials: "P" },
    { name: "Placeholder", role: "Public Relations", initials: "P" },
    { name: "Placeholder", role: "Public Relations", initials: "P" },
    { name: "Placeholder", role: "Historian", initials: "P" },
    { name: "Placeholder", role: "Historian", initials: "P" },
    { name: "Neil Nainani", role: "Webmaster", initials: "NN", photoUrl: "/images/officers/neilnainaniheadshot.JPG" },
    //Added headshot for myself to test how it would look with a real headshot
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
