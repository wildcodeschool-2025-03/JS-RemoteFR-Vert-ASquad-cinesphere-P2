import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { Search, ShoppingCart } from "lucide-react";
import logo from "../assets/images/cinesphere-logo-simple_1.png";
import Burger from "./Burger";
import Menu from "./Menu";

const Navbar = () => {
  // Afficher ou cacher la fenetre modal
  const [showModal, setShowModal] = useState(false);

  // Afficher ou cacher le menu burger
  const [open, setOpen] = useState(false);

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
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/*Les différentes pages*/}
        <div className={`navbar-pages ${open ? "active" : ""}`}>
          <ul>
            <Link to="/">
              <li>Acceuil</li>
            </Link>
            <Link to="/evenements">
              <li>Evenements</li>
            </Link>
            <Link to="/selection">
              <li>Selection</li>
            </Link>
            <Link to="/offres">
              <li>Offres</li>
            </Link>
          </ul>

          {/*Icons de la loupe et du panier */}
          <div className="navbar-icons">
            <Search className="icon" onClick={() => setShowModal(true)} />
            <Link to="/panier">
              <ShoppingCart className="icon" />
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
