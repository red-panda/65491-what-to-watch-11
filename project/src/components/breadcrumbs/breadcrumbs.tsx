import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  filmId?: number;
  filmName?: string;
};
function Breadcrumbs({filmName, filmId}: BreadcrumbsProps): JSX.Element {
  return(
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}/${filmId ? filmId.toString() : ''}`} className="breadcrumbs__link">{filmName}</Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
