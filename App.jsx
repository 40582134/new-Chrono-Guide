import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Guides from "./Guides";
import Encyclopedia from "./Encyclopedia";
import Characters from "./encyclopedia/Characters";
import Skills from "./encyclopedia/Skills";
import Equipment from "./encyclopedia/Equipment";
import Relics from "./encyclopedia/Relics";
import Consumables from "./encyclopedia/Consumables";
import "./App.css";
import "./css/Encyclopedia.css";
import "./css/Characters-Skills.css";
import "./css/Skills.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1600);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 1600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router basename="/Chrono-Guide-Vercel-Patch-P">
      <div className="flex flex-col h-screen">
        <TopNavigation toggleSidebar={toggleSidebar} />
        <hr className="horizontal-divider" />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="flex-1 overflow-y-auto" id="main-content-wrapper">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home isSidebarOpen={isSidebarOpen} />}
              />
              <Route path="/guides" element={<Guides />} />
              <Route path="/encyclopedia" element={<Encyclopedia />} />
              <Route path="/encyclopedia/characters" element={<Characters />} />
              <Route path="/encyclopedia/skills" element={<Skills />} />
              <Route path="/encyclopedia/equipment" element={<Equipment />} />
              <Route path="/encyclopedia/relics" element={<Relics />} />
              <Route
                path="/encyclopedia/consumables"
                element={<Consumables />}
              />
            </Routes>
          </div>
        </div>
        <footer className="bg-gray-900 text-white py-4 text-center" id="footer">
          &copy; 2024 Chrono Guide
          <span className="mx-4">|</span>
          <a
            href="#"
            className="text-blue-400 hover:underline"
            id="contact-link"
          >
            Contact
          </a>
          <span className="mx-4">|</span>
          <a
            href="#"
            className="text-blue-400 hover:underline"
            id="privacy-link"
          >
            Privacy Policy
          </a>
          <span className="mx-4">|</span>
          <a href="#" className="text-blue-400 hover:underline" id="tos-link">
            Terms of Service
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
