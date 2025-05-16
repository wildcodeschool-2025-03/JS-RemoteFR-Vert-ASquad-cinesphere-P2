import HeaderBanner from "../components/HeaderBanner";
import HeaderButton from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";
import MainTopCardList from "../components/MainTopCardList";

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
