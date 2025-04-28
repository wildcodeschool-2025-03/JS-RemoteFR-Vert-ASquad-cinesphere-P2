
import "./App.css";
import BannerOffer from "./components/BannerOffer";
import "./styles/MainTopCardList.css";
import { Outlet } from "react-router";
import "./styles/UpComing.css";

function App() {
  return (
    <>
      <Outlet />
      <BannerOffer />
    </>
  );
}
export default App;
