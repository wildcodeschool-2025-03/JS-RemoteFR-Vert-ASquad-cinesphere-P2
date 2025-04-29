import HeaderButton from "../components/HeaderButton";
import HeaderBanner from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";
import MainTopCardList from "../components/MainTopCardList";

function HomePage() {
  return (
    <div>
      <HeaderButton />
      <HeaderBanner />
      <MainTopCardList />
      <MainBottom />
    </div>
  );
}

export default HomePage;
