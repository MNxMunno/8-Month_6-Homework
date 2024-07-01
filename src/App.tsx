import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
