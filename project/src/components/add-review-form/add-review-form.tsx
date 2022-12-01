import {useState, ChangeEvent} from 'react';
function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState<string | null>(null);

  function onChangeValue(val: string) {
    setRating(val);
  }
  return (
    <form action="#" className="add-review__form">
      <div className="rating">{rating}
        <div className="rating__stars">
          {
            Array.from({length: 10}, (x:number, index) => {
              const val = (10 - index).toString();
              return (
                <div key={`${index}-star-${val}`}>
                  <input className="rating__input" id={`star-${val}`} type="radio" name="rating" value={val}
                    onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                      evt.preventDefault();
                      onChangeValue(evt.target.value);
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${val}`}>Rating {val}</label>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}


export default AddReviewForm;
