import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LaunchSessionPage from "./pages/LaunchSessionPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launch" element={<LaunchSessionPage />} />
        <Route path="/login" element={<LoginRegisterPage />} />
      </Routes>
      
    </>
  );
}

export default App;
