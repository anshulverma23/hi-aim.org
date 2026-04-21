import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Third from "./components/Third.jsx";
import Fouth from "./components/Fourth.jsx";
import Fifth from "./components/Fifth.jsx";
import Sixth from "./components/Sixth.jsx";
import Seventh from "./components/Seventh.jsx";
import Eight from "./components/Eight.jsx";
import Footer from "./components/Footer.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Register from "./components/Register.jsx";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      <Hero />
      <Testimonial />
      <Third />
      <Fouth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eight />
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;
