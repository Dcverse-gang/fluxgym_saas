import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LaunchSessionPage from "./pages/LaunchSessionPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launch" element={<LaunchSessionPage />} />
      </Routes>
      
    </>
  );
}

export default App;
