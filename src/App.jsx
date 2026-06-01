import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CareCenterPage from "./pages/CareCenterPage.jsx";
import FounderPage from "./pages/FounderPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SupportPage from "./pages/SupportPage.jsx";

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
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  );
}
