import "./App.css";
import "./Style/UpComing.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
