type FilmCardBgProps = {
  background?: string;
}
function FilmCardBg({background}: FilmCardBgProps): JSX.Element {
  return(
    <div className="film-card__bg">
      <img src={background} alt="The Grand Budapest Hotel"/>
    </div>
  );
}

export default FilmCardBg;
