import "../assets/styles/BannerOffer.css";

function BannerOffer() {
  return (
    <div className="containerBanner">
      <h1>Un monde de cinéma vous attend !</h1>
      <h2>Plus de 20 films à l'affiche chaque semaine</h2>
      <img
        src="https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/07/22/15/cinema-pourquoi-les-affiches-de-comedies-sont-elles-si-moches.jpg?VersionId=.HhdWSAzszgPlts8RCmi.26LXAM5DZXV"
        alt="affiches de films"
      />
      <button type="button">Découvrez notre sélection</button>
    </div>
  );
}

export default BannerOffer;
