import {useState} from 'react';
import {Movie} from '../../types/films';
import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReviews from '../tab-reviews/tab-reviews';
import {reviewsList} from '../../mocks/reviews';

type FilmCardTabsProps = {
  film: Movie;
};

const tabs = {
  overview: 'overview',
  details: 'details',
  reviews: 'reviews'
};

function FilmCardTabs({film}: FilmCardTabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState('overview');

  const toggleTab = () => {
    switch (currentTab) {
      case tabs.overview:
        return <TabOverview film={film}/>;
      case tabs.details:
        return <TabDetails film={film}/>;
      case tabs.reviews:
        return <TabReviews filmId={film.id} reviewsList={reviewsList}/>;
      default:
        return <TabOverview film={film}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ' ${currentTab === tabs.overview ? 'film-nav__item--active' : ''}`}>
            <a href="/" className="film-nav__link" onClick={(e) => {e.preventDefault();setCurrentTab(tabs.overview);}}>Overview</a>
          </li>
          <li className={`film-nav__item ' ${currentTab === tabs.details ? 'film-nav__item--active' : ''}`}>
            <a href="/" className="film-nav__link" onClick={(e) => {e.preventDefault();setCurrentTab(tabs.details);}}>Details</a>
          </li>
          <li className={`film-nav__item ' ${currentTab === tabs.reviews ? 'film-nav__item--active' : ''}`}>
            <a href="/" className="film-nav__link" onClick={(e) => {e.preventDefault();setCurrentTab(tabs.reviews);}}>Reviews</a>
          </li>
        </ul>
      </nav>

      {toggleTab()}
    </div>
  );
}

export default FilmCardTabs;
