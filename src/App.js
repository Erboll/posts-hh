import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUser from "./pages/AboutUser/AboutUser";
import AboutMe from "./pages/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-user" element={<AboutUser />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </div>
  );
}

export default App;
