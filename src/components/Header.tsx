import { Link } from "react-router-dom";
import type { NavItem } from "../siteContent";

type Props = {
  brandName: string;
  logoUrl?: string;
  nav: NavItem[];
  joinHref: string;
};

export function Header({ brandName, logoUrl, nav, joinHref }: Props) {
  return (
    <header>
      <div className="container nav">
        <Link className="brand" to="/">
          <span className="brand-mark">
            {logoUrl ? (
              <img src={logoUrl} alt={brandName} width={34} height={34} />
            ) : (
              "SASE"
            )}
          </span>
          <span>{brandName}</span>
        </Link>
        <nav aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn btn-secondary" to={joinHref}>
          Join
        </Link>
      </div>
    </header>
  );
}
