import {Helmet} from 'react-helmet-async';
import {Movies, Movie} from '../../types/films';
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

type MainProps = {
  films: Movies;
  mainFilm: Movie;
}

function Main({films, mainFilm}: MainProps): JSX.Element {
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

          <CatalogGenreList/>

          <CatalogFilmList films={films}/>

          <CatalogMore/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
