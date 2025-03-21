import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import MainOutlet from "./Component/MinOutlet/MainOutlet";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
