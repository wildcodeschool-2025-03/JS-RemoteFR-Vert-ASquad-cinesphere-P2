import BannerOffer from "../components/BannerOffer";
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
      <BannerOffer />
    </div>
  );
}

export default HomePage;
