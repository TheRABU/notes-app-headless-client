import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AllRoutes from "./routes/AllRoutes.tsx";
import { AuthProvider } from "./api/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  </StrictMode>
);
