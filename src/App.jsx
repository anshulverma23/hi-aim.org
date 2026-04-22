import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Third from "./components/Third.jsx";
import Fourth from "./components/Fourth.jsx";
import Fifth from "./components/Fifth.jsx";
import Sixth from "./components/Sixth.jsx";
import Seventh from "./components/Seventh.jsx";
import Eight from "./components/Eight.jsx";
import Footer from "./components/Footer.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Register from "./components/Register.jsx";
import "./index.css";

const HomePage = () => (
  <>
    <Hero />
    <Testimonial />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Seventh />
    <Eight />
    <Footer />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isRegisterRoute = location.pathname === "/register";

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isRegisterRoute && <HomePage />}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
