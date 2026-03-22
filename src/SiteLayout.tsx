import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { SiteFooter } from "./components/SiteFooter";
import { siteContent } from "./siteContent";

export function SiteLayout() {
  const c = siteContent;

  return (
    <div className="app-root">
      <Header
        brandName={c.brandName}
        logoUrl={c.headerLogoUrl}
        nav={c.nav}
        joinHref={c.links.join}
      />
      <main>
        <Outlet />
      </main>
      <SiteFooter
        line={c.footer.line}
        emailDisplay={c.footer.emailDisplay}
        emailHref={c.links.email}
        social={c.links.social}
      />
    </div>
  );
}
