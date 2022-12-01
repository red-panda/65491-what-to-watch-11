import {Movies} from '../../types/films';
import CatalogFilmCard from '../catalog-film-card/catalog-film-card';

type CatalogFilmListProps = {
  films: Movies;
}

function CatalogFilmList({films}: CatalogFilmListProps): JSX.Element{
  return(
    <div className="catalog__films-list">
      {
        films.map((film, index) => <CatalogFilmCard film={film} key={film.id}/>)
      }
    </div>
  );
}

export default CatalogFilmList;
