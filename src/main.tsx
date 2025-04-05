import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "primeicons/primeicons.css";

import { GameContextProvider } from "./context/context.tsx";
import { PrimeReactProvider } from "primereact/api";
import designSystem from "./utils/design-system.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ pt: designSystem }}>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
