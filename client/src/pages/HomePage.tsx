import MainBottom from "../components/MainBottom";
import HeaderButton from "../components/HeaderButton";
import MainTopCardList from "../components/MainTopCardList";
function HomePage() {
  return (
    <>
      <MainTopCardList />
      <HeaderButton />
      <MainBottom /> {/* 2ème partie du main */}

    </>
  );
}

export default HomePage;
