import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onCreateUser={createUser} />} />
        <Route path="/about" element={<AboutPage user={user} />} />
      </Routes>
      <Navigation />
    </>
  );

  function createUser(name) {
    setUser(name);
    navigate("/about");
  }
}
