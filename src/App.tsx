import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { SiteLayout } from "./SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { OfficersPage } from "./pages/OfficersPage";
import { SponsorsPage } from "./pages/SponsorsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="officers" element={<OfficersPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
