import { Outlet } from "react-router";
import "./App.css";
import "./assets/styles/MainTopCardList.css";
import "./assets/styles/UpComing.css";
import "./assets/styles/Navbar.css";
import "./assets/styles/Burger.css";
import "./assets/styles/Menu.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
}
export default App;
