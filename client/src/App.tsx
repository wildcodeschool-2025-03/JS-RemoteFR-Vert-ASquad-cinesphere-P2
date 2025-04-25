import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
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
    </>
  );
}
export default App;
