import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TareasProvider } from "./context/TareasContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TareasProvider>
    <App />
  </TareasProvider>
);
