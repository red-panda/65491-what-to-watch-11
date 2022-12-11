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
import {AppRoute} from '../../const';
import FilmCardTabs from '../../components/film-card-tabs/film-card-tabs';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import {useAppSelector} from '../../hooks';
import {getAllFilms} from '../../store/films-data/selectors';

function Film(): JSX.Element {
  const { id } = useParams();
  const films = useAppSelector(getAllFilms);
  const currentFilm = films.find((el) => el.id === Number(id));
  const routeId = currentFilm ? currentFilm.id : '';

  return (
    <div>
      {!currentFilm ? (
        <Navigate to="/film" replace/>
      ) : (
        <>
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
                    <Link to={`${AppRoute.Film}/${routeId}${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <FilmCardPoster poster={currentFilm?.posterImage} sizeType={'big'}/>

                <FilmCardTabs film={currentFilm}/>
              </div>
            </div>
          </section>

          <div className="page-content">
            <MoreLikeThis films={films} film={currentFilm}/>
            <Footer/>
          </div>
        </>
      )}
    </div>
  );
}

export default Film;
