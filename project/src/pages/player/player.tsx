import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../components/const';
import {useAppSelector} from '../../hooks';

function Player(): JSX.Element {
  const { id } = useParams();
  const films = useAppSelector((state) => state.allFilms);
  const currentFilm = films.find((el) => el.id === Number(id));
  const routeId = currentFilm ? currentFilm.id.toString() : '';

  return (
    <>
      {!currentFilm && (
        <Navigate to="/player" replace/>
      )}
      <div className="player">
        <Helmet>
          <title>Player</title>
        </Helmet>
        <video src={currentFilm?.videoLink} className="player__video" poster={currentFilm?.backgroundImage}></video>

        <Link to={`${AppRoute.Film}/${routeId}`} type="button" className="player__exit">Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{'left': '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{currentFilm?.name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
