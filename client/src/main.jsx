import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import { Buffer } from "buffer";
import "./index.css";
import { StateContextProvider } from "./context";

window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="sepolia">
      <BrowserRouter>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>,
);
