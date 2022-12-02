import {useState} from 'react';
function AddReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: null,
    comment: ''
  });
  const [showData, setShowData] = useState(false);

  function handleFieldChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setShowData(!showData);
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from({length: 10}, (x:number, index) => {
              const val = (10 - index).toString();
              return (
                <div key={`${index}-star-${val}`}>
                  <input className="rating__input" id={`star-${val}`} type="radio" name="rating" value={val} checked={formData.rating === val} onChange={handleFieldChange}/>
                  <label className="rating__label" htmlFor={`star-${val}`}>Rating {val}</label>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" value={formData.comment} onChange={handleFieldChange}></textarea>
        <div className="add-review__submit">
          <button onClick={handleFormSubmit} className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
      {showData && (
        <div>
          Rating: {formData.rating}
          Comment: {formData.comment}
        </div>
      )}
    </form>
  );
}


export default AddReviewForm;
