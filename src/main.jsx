import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ContentProvider } from "./context/ContentContext.jsx";
import "./styles/site.css";

document.body.classList.add("animations-ready");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContentProvider>
        <App />
      </ContentProvider>
    </BrowserRouter>
  </StrictMode>,
);
