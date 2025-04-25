import HeaderButton from "../components/HeaderButton";
import MainBottom from "../components/MainBottom";
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
