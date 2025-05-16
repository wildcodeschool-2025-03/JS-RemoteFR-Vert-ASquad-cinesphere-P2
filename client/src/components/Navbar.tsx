import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { Search, ShoppingCart } from "lucide-react";
import logo from "../assets/images/cinesphere-logo-simple_1.png";
import type { RootState } from "../store";
import { shoppingCartActions } from "../store/shopping-cart-slice";
import Burger from "./Burger";
import Menu from "./Menu";

const Navbar = () => {
  // Afficher ou cacher la fenetre modal
  const [showModal, setShowModal] = useState(false);

  // Afficher ou cacher le menu burger
  const [open, setOpen] = useState(false);

  const cartLength = useSelector(
    (state: RootState) => state.shoppingCart.items.length,
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      shoppingCartActions.addItemToCart({
        id: "teste",
      }),
    );
  };

  return (
    <>
      {/*Menu Deroulant*/}
      <Menu open={open} setOpen={setOpen} />

      {/*NavBar*/}
      <div className="navbar">
        {/*Bouton burger pour ouvrir et fermer le menu*/}
        <div className="burger">
          <Burger open={open} setOpen={setOpen} />
        </div>

        {/*Logo du site*/}
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        {/*Les différentes pages*/}
        <div className={`navbar-pages ${open ? "active" : ""}`}>
          <ul>
            <Link to="/">
              <li>ACCUEIL</li>
            </Link>
            <Link to="/evenements">
              <li>EVENEMENTS</li>
            </Link>
            <Link to="/selection">
              <li>SELECTION</li>
            </Link>
            <Link to="/offres">
              <li>OFFRES</li>
            </Link>
          </ul>

          {/*Icons de la loupe et du panier */}
          <div className="navbar-icons">
            <Search className="icon" onClick={() => setShowModal(true)} />

            <Link to="/panier">
              <button
                type="button"
                className="btn-panier"
                onClick={handleClick}
              >
                <ShoppingCart className="icon" /> ({cartLength}{" "}
                {cartLength === 1 ? "" : ""})
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*Fenetre modal pour rechercher*/}
      {showModal && (
        <button
          type="button"
          className="modal"
          onClick={() => setShowModal(false)}
        >
          <div
            role="presentation"
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2>Rechercher</h2>
            <input
              className="modal-shear"
              type="text"
              placeholder="Rechercher..."
            />
          </div>
        </button>
      )}
    </>
  );
};

export default Navbar;
