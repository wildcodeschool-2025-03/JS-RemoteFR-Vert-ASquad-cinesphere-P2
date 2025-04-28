
import BannerOffer from "../components/BannerOffer";
import HeaderButton from "../components/HeaderButton";
import HeaderBanner from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";
import MainTopCardList from "../components/MainTopCardList";

function HomePage() {
  return (
    <div>
      <BannerOffer />
      <main>
        <HeaderButton />
        <HeaderBanner />
        <MainTopCardList />
        <MainBottom />
      </main>
    </div>
  );
}

export default HomePage;
