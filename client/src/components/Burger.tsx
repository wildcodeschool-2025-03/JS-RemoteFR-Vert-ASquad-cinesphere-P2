import "../style/Burger.css";

type Props = {
  //Un true ou false pour savoir si le menu est ouvert
  open: boolean;

  //Permet de ouvrir ou fermer le menu
  setOpen: (value: boolean) => void;
};

//burger
const Burger = ({ open, setOpen }: Props) => {
  return (
    //Si "open" est vrai, on ajoute "open" à la classe pour changer le style du burger
    <button
      type="button"
      className={`burger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      {/*Pour crée les 3 barre du burger*/}
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
