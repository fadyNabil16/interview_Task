import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./i18n.js";
import App from "./App.jsx";
import { LangProvider } from "./context/LangProvider.jsx";
import { PackageContext, PackageProvider } from "./context/PackageProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
      <PackageProvider>
        <App />
      </PackageProvider>
    </LangProvider>
  </StrictMode>
);
