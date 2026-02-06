import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./route";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error(
    "Root element topilmadi! index.html faylida id='root' borligini tekshiring.",
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>,
  );
}
