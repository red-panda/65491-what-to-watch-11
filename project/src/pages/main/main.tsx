import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import CatalogFilmList from '../../components/catalog-film-list/catalog-film-list';
import CatalogGenreList from '../../components/catalog-genre-list/catalog-genre-list';
import CatalogMore from '../../components/catalog-more/catalog-more';
import CatalogTitle from '../../components/catalog-title/catalog-title';
import {useAppSelector} from '../../hooks';
import {getFilms, getGenre, getMainFilm, getSortedFilms} from '../../store/films-data/selectors';
import {store} from '../../store';
import {fetchFilmsAction, fetchMainFilmAction} from '../../store/api-actions';
import MainFilmCard from '../../components/main-film-card/main-film-card';
import {useState} from 'react';

store.dispatch(fetchMainFilmAction());
store.dispatch(fetchFilmsAction());

function Main(): JSX.Element {
  const VISIBLE_FILMS_STEP = 8;
  const films = useAppSelector(getFilms);
  const mainFilm = useAppSelector(getMainFilm);
  const genres = ['All genres', ...new Set(films.map((el) => el.genre))];
  const currentGenre = useAppSelector(getGenre);
  const sortedFilms = useAppSelector(getSortedFilms);
  const [filmsVisible, setFilmsVisible] = useState(VISIBLE_FILMS_STEP);

  const showMoreClickHandle = () => {
    setFilmsVisible(filmsVisible + VISIBLE_FILMS_STEP);
  };

  return (
    <>
      <Helmet>
        <title>WTW</title>
      </Helmet>
      {mainFilm && <MainFilmCard film={mainFilm}/>}

      <div className="page-content">
        <section className="catalog">
          <CatalogTitle/>

          <CatalogGenreList genres={genres} currentGenre={currentGenre}/>

          <CatalogFilmList films={sortedFilms.slice(0, filmsVisible)}/>

          {filmsVisible < sortedFilms.length && <CatalogMore onShowMoreClick={showMoreClickHandle}/>}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
