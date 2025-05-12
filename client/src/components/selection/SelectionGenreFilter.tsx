import type { FC } from "react";
import "../../assets/styles/SelectionGenreFilter.css";

type Genre = {
  id: number;
  name: string;
  selected: boolean;
};

type SelectionGenreFilterProps = {
  genres: Genre[];
  onToggleGenre: (id: number) => void;
};

const SelectionGenreFilter: FC<SelectionGenreFilterProps> = ({
  genres,
  onToggleGenre,
}) => {
  return (
    <div className="genre-filter">
      <h3 className="genre-title">Genres</h3>
      <div className="genre-list">
        {genres.map((genre) => (
          <label key={genre.id} className="genre-label">
            <input
              type="checkbox"
              checked={genre.selected}
              onChange={() => onToggleGenre(genre.id)}
              className="genre-checkbox"
            />
            <span className="genre-name">{genre.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectionGenreFilter;
