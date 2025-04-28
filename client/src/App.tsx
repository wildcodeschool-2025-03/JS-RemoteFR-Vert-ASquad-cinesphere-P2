import { Outlet } from "react-router";
import "./App.css";
import BannerOffer from "./components/BannerOffer";

function App() {
  return (
    <>
      <Outlet />
      <BannerOffer />
    </>
  );
}
export default App;
