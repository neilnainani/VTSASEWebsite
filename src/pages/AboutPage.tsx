import { useEffect } from "react";
import { siteContent } from "../siteContent";

export function AboutPage() {
  const c = siteContent;
  const placeholderImages = [
    "public/images/DSC_0649.jpg",
    "public/images/DSC_0141.jpg",
    "public/images/DSC_0896.jpg",
  ];

  useEffect(() => {
    document.title = c.aboutPageTitle;
  }, [c.aboutPageTitle]);

  return (
    <section className="content-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{c.about.kicker}</span>
          <h1>{c.about.headline}</h1>
          <p className="about-intro">{c.about.intro}</p>
        </div>

        <div className="card-grid">
          {c.about.sections.map((section) => (
            <article className="card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="about-gallery" aria-label="About Us image placeholders">
          {placeholderImages.map((src, index) => (
            <img
              key={src}
              className="about-placeholder-image"
              src={src}
              alt={`About placeholder ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
