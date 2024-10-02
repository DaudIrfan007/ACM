import React, { useState } from "react";
import Preloader from "./components/PreLoader"; // Adjust path as necessary
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUS from "./components/AboutUS";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor component
import Contact from "./components/Contact";
const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen">
          <Preloader onComplete={handlePreloaderComplete} />
        </div>
      ) : (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <AboutUS />
          <Collaboration />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
      <CustomCursor />
      <ButtonGradient />
    </>
  );
};

export default App;
