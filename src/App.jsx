import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/PreLoader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUS from "./components/AboutUS";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import CustomCursor from "./components/CustomCursor";
import Contact from "./components/Contact";
import AdminPage from "./components/Admin";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [buttons, setButtons] = useState([]); // State for buttons
  const location = useLocation(); // Get the current location

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  const isAdminRoute = location.pathname === "/admin";

  // Load buttons from local storage on component mount
  useEffect(() => {
    const savedButtons = JSON.parse(localStorage.getItem("buttons")) || [];
    setButtons(savedButtons);
  }, []);

  return (
    <>
      {loading && !isAdminRoute ? (
        <div className="w-screen h-screen">
          <Preloader onComplete={handlePreloaderComplete} />
        </div>
      ) : (
        <div
          className={
            isAdminRoute ? "" : "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"
          }
        >
          {!isAdminRoute && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero buttons={buttons} /> {/* Pass buttons to Hero */}
                  <AboutUS />
                  <Collaboration />
                  <Services />
                  <Contact />
                </>
              }
            />
            <Route
              path="/admin"
              element={<AdminPage setButtons={setButtons} />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          {!isAdminRoute && <Footer />}
          <CustomCursor /> {/* Always show CustomCursor */}
        </div>
      )}
      <ButtonGradient />
    </>
  );
};

export default App;
