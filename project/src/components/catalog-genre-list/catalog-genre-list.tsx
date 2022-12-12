import {useAppDispatch} from '../../hooks';
import {changeGenre} from '../../store/action';

type CatalogGenreListProps = {
  genres: string[];
  currentGenre: string;
};

function CatalogGenreList({genres, currentGenre}: CatalogGenreListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre(genre));
  };
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
            <a href="/" onClick={(e) => {e.preventDefault(); handleGenreClick(genre);}} className="catalog__genres-link">{genre}</a>
          </li>
        )
        )
      }
    </ul>
  );
}

export default CatalogGenreList;
