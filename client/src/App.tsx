import { Route, Routes } from "react-router-dom";

import Acceuil from "./pages/Acceuil";
import Evenements from "./pages/Evenements";
import Offres from "./pages/Offres";
import Selection from "./pages/Selection";

import "./App.css";
import Panier from "./pages/Panier";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Evenements" element={<Evenements />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Offres" element={<Offres />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="*" element={<Acceuil />} />
      </Routes>
    </>
  );
};

export default App;
