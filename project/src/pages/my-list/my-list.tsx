import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import CatalogTitle from '../../components/catalog-title/catalog-title';
import CatalogFilmList from '../../components/catalog-film-list/catalog-film-list';
import {useAppSelector} from '../../hooks';
import {getAllFilms} from '../../store/films-data/selectors';

function MyList(): JSX.Element {
  const films = useAppSelector(getAllFilms);
  const favFilms = films.filter((film) => film.isFavorite);
  return (
    <div className="user-page">
      <Helmet>
        <title>My list</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>

        <User/>
      </header>

      <section className="catalog">
        <CatalogTitle/>

        <CatalogFilmList films={favFilms}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
