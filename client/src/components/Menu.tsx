import { Link } from "react-router-dom";
import "../assets/styles/Menu.css";

type Props = {
  //un true ou false pour savoir si le menu est ouvert
  open: boolean;

  // Permet d'ouvrir ou de fermer le menu
  setOpen: (value: boolean) => void;
};

//Menu
const Menu = ({ open, setOpen }: Props) => {
  return (
    //Si "open" est vrai on ajoute la classe CSS "open" pour afficher le menu
    <nav className={`menu ${open ? "open" : ""}`}>
      {/*Bouton pour fermer le menu quand on y clique dessus*/}
      <button type="button" className="button" onClick={() => setOpen(false)}>
        ×
      </button>

      {/*Les différentes pages*/}
      <ul className="liens">
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
    </nav>
  );
};

export default Menu;
