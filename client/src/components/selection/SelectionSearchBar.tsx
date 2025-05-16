import { Search } from "lucide-react";
import type React from "react";
import "../../assets/styles/SelectionSearchBar.css";

type SelectionSearchBarProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const SelectionSearchBar: React.FC<SelectionSearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="search-bar-container">
      <div className="search-icon-container">
        <Search className="search-icon" />
      </div>
      <input
        type="text"
        placeholder="Rechercher un film..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SelectionSearchBar;
