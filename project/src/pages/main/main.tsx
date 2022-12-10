import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import CatalogFilmList from '../../components/catalog-film-list/catalog-film-list';
import CatalogGenreList from '../../components/catalog-genre-list/catalog-genre-list';
import CatalogMore from '../../components/catalog-more/catalog-more';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import HiddenTitle from '../../components/hidden-title/hidden-title';
import User from '../../components/user/user';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import BtnPlay from '../../components/btn-play/btn-play';
import BtnMyList from '../../components/btn-my-list/btn-my-list';
import CatalogTitle from '../../components/catalog-title/catalog-title';
import {useAppSelector} from '../../hooks';

function Main(): JSX.Element {
  const allFilms = useAppSelector((state) => state.allFilms);
  const mainFilm = allFilms[20];
  const genres = ['All genres', ...new Set(allFilms.map((el) => el.genre))];
  const currentGenre = useAppSelector((state) => state.genre);
  const sortedFilms = useAppSelector((state) => state.films);

  return (
    <>
      <Helmet>
        <title>WTW</title>
      </Helmet>
      <section className="film-card">
        <FilmCardBg background={mainFilm.backgroundImage}/>

        <HiddenTitle/>

        <header className="page-header film-card__head">
          <Logo/>

          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster poster={mainFilm.posterImage}/>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <BtnPlay filmId={mainFilm.id}/>
                <BtnMyList/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <CatalogTitle/>

          <CatalogGenreList genres={genres} currentGenre={currentGenre}/>

          <CatalogFilmList films={sortedFilms}/>

          <CatalogMore/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
