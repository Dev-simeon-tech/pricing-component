import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { TogglePriceProvider } from "./context/toggle-price.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TogglePriceProvider>
      <App />
    </TogglePriceProvider>
  </StrictMode>
);
