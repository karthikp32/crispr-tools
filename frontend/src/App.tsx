import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import ToolDirectoryPage from "./components/ToolDirectoryPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolDirectoryPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
