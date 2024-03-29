import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";
import InteractiveGlobe from "./pages/Photography";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    return (
        <div className={`App ${expandNavbar ? "NavOpen" : ""}`}>
            <HashRouter>
                <Navbar
                    expandNavbar={expandNavbar}
                    setExpandNavbar={setExpandNavbar}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/photography" element={<InteractiveGlobe />} />
                    <Route path="/project/:id" element={<ProjectDisplay />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
