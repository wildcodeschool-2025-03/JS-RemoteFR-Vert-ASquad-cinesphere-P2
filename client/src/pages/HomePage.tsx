import HeaderButton from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";
import MainTopCardList from "../components/MainTopCardList";
import HeaderBanner from "../components/HeaderBanner";

function HomePage() {
  return (
    <div>
      <HeaderBanner />
      <HeaderButton />
      <MainTopCardList />
      <MainBottom />
    </div>
  );
}

export default HomePage;
