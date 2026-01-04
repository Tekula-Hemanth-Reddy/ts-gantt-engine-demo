import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Play from "./play/play.tsx";
import Fallback from "./fallback/fallback.tsx";
const ReadMe = React.lazy(() => import("./docs/docs.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to={"/ts-gantt-engine/play"} replace />} />
        <Route path="ts-gantt-engine" element={<App />}>
          <Route
            index
            element={<Navigate to={"/ts-gantt-engine/play"} replace />}
          />
          <Route path="play" element={<Play />}></Route>
          <Route
            path="docs"
            element={
              <React.Suspense fallback={<Fallback/>}>
                <ReadMe />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
