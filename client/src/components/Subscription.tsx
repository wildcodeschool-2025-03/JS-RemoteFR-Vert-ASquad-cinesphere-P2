import "../styles/Subscription.css";

function Subscription() {
  return (
    <div className="Subscription">
      <div className="firstBlock">
        <h1>DES ÉTOILES DANS LES YEUX, PAS DANS LE PRIX</h1>

        <p>
          Des films pour tous les goûts, à savourer en solo, en couple ou en
          famille.
        </p>
        <p>
          Réservez dès maintenant et laissez-vous emporter par la magie du grand
          écran.
        </p>
      </div>

      <div className="subBlock">
        <div className="subBtnBlock">
          <h2 className="titleOffer">
            Cinépass, l’offre qui s’adapte à votre style de vie
          </h2>
          <p>
            Choisissez la formule qui vous convient et profitez de vos films en
            illimité chaque mois.
          </p>
          <button className="subBtn" type="button">
            Je m'abonne
          </button>
        </div>

        <div className="priceBlock">
          <h2>CINEPASS</h2>
          <img src="src/assets/images/logo.png" alt="logo cinépass" />
          <div className="pricing">
            <p>À partir de</p>
            <p>19,99€</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
