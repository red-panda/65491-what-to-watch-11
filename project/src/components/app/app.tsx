import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import { Movies } from '../../types/films';

import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProps = {
  films: Movies;
}

function App({films}: AppProps): JSX.Element {
  const mainFilm = films[20];
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route index element={<Main films={films} mainFilm={mainFilm}/>}></Route>
          <Route path={`${AppRoute.Film}/:id`} element={<Film films={films}/>}></Route>
          <Route path={`${AppRoute.Film}/:id${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReview films={films}/>
            </PrivateRoute>
          }
          >
          </Route>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films}/>
            </PrivateRoute>
          }
          >
          </Route>
          <Route path={`${AppRoute.Player}/:id`} element={<Player films={films}/>}></Route>
          <Route path={AppRoute.Login} element={<SignIn/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
