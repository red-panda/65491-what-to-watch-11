import CatalogFilmList from '../catalog-film-list/catalog-film-list';
import {Movie, Movies} from '../../types/films';

type MoreLikeThisProps = {
  films: Movies;
  film: Movie;
}

function MoreLikeThis({films, film}: MoreLikeThisProps): JSX.Element {
  const similarFilms = films.filter((el) => el.genre === film.genre && el.id !== film.id).slice(0,4);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <CatalogFilmList films={similarFilms}/>
    </section>
  );
}

export default MoreLikeThis;
