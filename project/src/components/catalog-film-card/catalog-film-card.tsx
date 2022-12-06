import {useState} from 'react';
import {AppRoute} from '../const';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type CatalogFilmCardProps = {
  film: Movie;
}

function CatalogFilmCard({film}: CatalogFilmCardProps): JSX.Element {
  const [hover, setHover] = useState(false);
  const [timeout, setModalTimeout] = useState(setTimeout(() => 0));

  const handleMouseEnter = () => {
    timeout && !hover && clearTimeout(timeout);
    setModalTimeout(setTimeout(() => setHover(true), 1000));
  };

  const handleMouseLeave = () => {
    timeout && clearTimeout(timeout);
    setHover(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={(e:React.MouseEvent) => handleMouseEnter()}
      onMouseLeave={(e:React.MouseEvent) => handleMouseLeave()}
    >
      <div className="small-film-card__image">
        <VideoPlayer video={film.videoLink} poster={film.previewImage} hover={hover}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
