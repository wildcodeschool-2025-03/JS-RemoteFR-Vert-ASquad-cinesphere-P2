import "../assets/styles/HeaderButton.css";

type HeaderButtonProps = {
  onClick?: () => void;
};

const HeaderButton = ({ onClick }: HeaderButtonProps) => {
  return (
    <button type="button" className="header-button" onClick={onClick}>
      Réservez maintenant
    </button>
  );
};

export default HeaderButton;
