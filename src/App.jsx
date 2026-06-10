import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CareCenterPage from "./pages/CareCenterPage.jsx";
import FounderPage from "./pages/FounderPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import { RequireAdmin } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="founder" element={<FounderPage />} />
        <Route path="care-center" element={<CareCenterPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
      <Route path="admin">
        <Route index element={<RequireAdmin><AdminPage /></RequireAdmin>} />
        <Route path="login" element={<AdminLogin />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}