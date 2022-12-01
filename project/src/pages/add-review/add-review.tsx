import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import HiddenTitle from '../../components/hidden-title/hidden-title';
import User from '../../components/user/user';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {Movies} from '../../types/films';
import {Navigate, useParams} from 'react-router-dom';

type AddReviewProps = {
  films: Movies;
}

function AddReview({films}: AddReviewProps): JSX.Element {
  const { id } = useParams();
  const currentFilm = films.find((el) => el.id === Number(id));

  return (
    <>
      {!currentFilm && (
        <Navigate to="/film" replace/>
      )}
      <section className="film-card film-card--full" style={{background: currentFilm?.backgroundColor}}>
        <Helmet>
          <title>Add review {currentFilm?.name}</title>
        </Helmet>
        <div className="film-card__header">
          <FilmCardBg background={currentFilm?.backgroundImage}/>

          <HiddenTitle/>

          <header className="page-header">
            <Logo/>

            <Breadcrumbs/>

            <User/>
          </header>

          <FilmCardPoster poster={currentFilm?.posterImage} sizeType={'small'}/>
        </div>

        <div className="add-review">
          <AddReviewForm/>
        </div>

      </section>
    </>
  );
}

export default AddReview;
