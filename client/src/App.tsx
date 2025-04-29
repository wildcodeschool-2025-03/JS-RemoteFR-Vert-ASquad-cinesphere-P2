import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import "./App.css";
import BannerOffer from "./components/BannerOffer";
import "./styles/MainTopCardList.css";
import "./styles/UpComing.css";
import "./styles/Navbar.css";
import "./styles/Burger.css";
import "./styles/Menu.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <BannerOffer />
    </>
  );
}
export default App;
