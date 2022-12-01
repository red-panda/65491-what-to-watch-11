type FilmCardPosterProps = {
  poster?: string;
  sizeType?: string | never;
}
function FilmCardPoster({poster, sizeType}: FilmCardPosterProps): JSX.Element {
  return (
    <div className={`film-card__poster ${sizeType ? `film-card__poster--${sizeType}` : ''}`}>
      <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
    </div>
  );
}

export default FilmCardPoster;
