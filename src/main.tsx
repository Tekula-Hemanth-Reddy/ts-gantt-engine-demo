import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Play from "./play/play.tsx";
import Fallback from "./fallback/fallback.tsx";
const ReadMe = React.lazy(() => import("./docs/docs.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="play" replace />} />
          <Route path="play" element={<Play />} />
          <Route
            path="docs"
            element={
              <React.Suspense fallback={<Fallback />}>
                <ReadMe />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
