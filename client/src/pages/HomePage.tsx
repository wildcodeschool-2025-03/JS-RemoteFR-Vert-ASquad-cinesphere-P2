import HeaderButton from "../components/HeaderButton";
import HeaderBanner from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";

import { Link } from "react-router";
import MainTopCardList from "../components/MainTopCardList";

function HomePage() {
  return (
    <div>
      <main>
        <Link to="/reservation">Réservation</Link>

        <HeaderButton />
        <HeaderBanner />
        <MainTopCardList />
        <MainBottom />
      </main>
    </div>
  );
}

export default HomePage;
