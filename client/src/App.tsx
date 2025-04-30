import { Outlet } from "react-router";
import "./App.css";
import BannerOffer from "./components/BannerOffer";
import "./assets/styles/MainTopCardList.css";
import "./assets/styles/UpComing.css";
import Footer from "./components/Footer";
import HeaderBanner from "./components/HeaderBanner";

function App() {
  return (
    <>
      <HeaderBanner />
      <Outlet />
      <BannerOffer />
      <Footer />
    </>
  );
}
export default App;
