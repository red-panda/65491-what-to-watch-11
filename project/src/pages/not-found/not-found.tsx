import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../components/const';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>404 Not found</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">


              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              404 Not found
              <video preload="auto" controls={false} autoPlay loop playsInline muted style={{maxWidth: '480px'}} src="img/404.mp4" className="player__video" poster="img/404.gif"></video>
              <Link style={{marginTop: '30px'}} className="user-block__link" to={AppRoute.Root}>Back to main page</Link>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default NotFound;
