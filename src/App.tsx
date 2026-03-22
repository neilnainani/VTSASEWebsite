import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { SiteLayout } from "./SiteLayout";
import { HomePage } from "./pages/HomePage";
import { OfficersPage } from "./pages/OfficersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="officers" element={<OfficersPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
