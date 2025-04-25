import Burger from "../components/Burger";
import Footer from "../components/Footer";
import HeaderButton from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";
import MainTopCardList from "../components/MainTopCardList";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div>
      <main>
        <NavBar />
        <Burger />
        <Menu />
        <HeaderButton />
        <HeaderBanner />
        <MainTopCardList />
        <MainBottom />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
