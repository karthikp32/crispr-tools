import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import HomePage from "./components/home";
import ToolDirectoryPage from "./components/ToolDirectoryPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolDirectoryPage />} />
      </Routes>
    <Analytics />
    <SpeedInsights />
    </Suspense>
  );
}

export default App;
