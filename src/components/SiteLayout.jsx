import { Outlet } from "react-router-dom";
import { LightboxProvider } from "../context/LightboxContext.jsx";
import { useScrollAnimations } from "../hooks/useScrollAnimations.js";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function SiteLayout() {
  useScrollAnimations();

  return (
    <LightboxProvider>
      <Header />
      <Outlet />
      <Footer />
    </LightboxProvider>
  );
}
