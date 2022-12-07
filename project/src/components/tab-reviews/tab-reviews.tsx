import FilmReview from '../film-review/film-review';
import {ReviewsList} from '../../types/reviews';

type FilmReviewProps = {
  filmId: number;
  reviewsList: ReviewsList;
};
function TabReviews({filmId, reviewsList}: FilmReviewProps): JSX.Element {
  const reviews = reviewsList[filmId];

  const reviewsFirstColumn = reviews.filter((el, index) => index % 2 === 0);
  const reviewsSecondColumn = reviews.filter((el, index) => index % 2 !== 0);
  return (
    <div className="film-card__tab">
      {!reviews ? (
        'No reviews'
      ) : (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {
              reviewsFirstColumn.map((review) => <FilmReview review={review} key={review.id}/>)
            }
          </div>
          <div className="film-card__reviews-col">
            {
              reviewsSecondColumn.map((review) => <FilmReview review={review} key={review.id}/>)
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default TabReviews;
