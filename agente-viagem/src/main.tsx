import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30
    }
  }
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
