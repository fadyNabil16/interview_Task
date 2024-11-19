import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./i18n.js";
import App from "./App.jsx";
import { LangProvider } from "./context/LangProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>
);
