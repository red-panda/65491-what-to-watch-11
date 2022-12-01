import {useState} from 'react';
import {AppRoute} from '../const';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/films';

type CatalogFilmCardProps = {
  film: Movie;
}

function CatalogFilmCard({film}: CatalogFilmCardProps): JSX.Element {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={(e:React.MouseEvent) => setHover(true)}
      onMouseLeave={(e:React.MouseEvent) => setHover(false)}
    >
      <div className="small-film-card__image">
        {hover ? <video preload="auto" controls={false} autoPlay loop playsInline muted style={{width: '100%', height: '100%', objectFit: 'cover'}} src={film.videoLink} /> : <img src={film.previewImage} alt={film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
