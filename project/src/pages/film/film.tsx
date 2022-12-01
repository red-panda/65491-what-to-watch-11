import {useParams, Navigate, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import HiddenTitle from '../../components/hidden-title/hidden-title';
import User from '../../components/user/user';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import BtnPlay from '../../components/btn-play/btn-play';
import BtnMyList from '../../components/btn-my-list/btn-my-list';
import {Movies} from '../../types/films';
import CatalogFilmList from '../../components/catalog-film-list/catalog-film-list';
import {AppRoute} from '../../components/const';

type FilmProps = {
  films: Movies;
}

function Film({films}: FilmProps): JSX.Element {
  const { id } = useParams();
  const currentFilm = films.find((el) => el.id === Number(id));
  const routeId = currentFilm ? currentFilm.id : '';

  return (
    <>
      {!currentFilm && (
        <Navigate to="/film" replace/>
      )}
      <Helmet>
        <title>{currentFilm?.name}</title>
      </Helmet>
      <section className="film-card film-card--full" style={{background: currentFilm?.backgroundColor}}>
        <div className="film-card__hero">
          <FilmCardBg background={currentFilm?.backgroundImage}/>

          <HiddenTitle/>

          <header className="page-header film-card__head">
            <Logo/>

            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <BtnPlay filmId={currentFilm?.id}/>
                <BtnMyList/>
                <Link to={`${AppRoute.Film}/${routeId}/${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster poster={currentFilm?.posterImage} sizeType={'big'}/>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{currentFilm?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{currentFilm?.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm?.description}</p>

                <p className="film-card__director"><strong>Director: {currentFilm?.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {currentFilm?.starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CatalogFilmList films={films.slice(0,4)}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Film;
