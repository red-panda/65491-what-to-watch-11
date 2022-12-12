import FilmCardBg from '../film-card-bg/film-card-bg';
import HiddenTitle from '../hidden-title/hidden-title';
import Logo from '../logo/logo';
import User from '../user/user';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import BtnPlay from '../btn-play/btn-play';
import BtnMyList from '../btn-my-list/btn-my-list';
import {Movie} from '../../types/films';

type filmCardProps = {
  film: Movie;
}

function filmCard({film}: filmCardProps): JSX.Element {
  return (
    <section className="film-card">
      <FilmCardBg background={film.backgroundImage}/>

      <HiddenTitle/>

      <header className="page-header film-card__head">
        <Logo/>

        <User/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmCardPoster poster={film.posterImage}/>

          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <div className="film-card__buttons">
              <BtnPlay filmId={film.id}/>
              <BtnMyList/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default filmCard;
