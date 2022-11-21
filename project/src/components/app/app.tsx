import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  film: {
    title: string;
    genre: string;
    year: string;
  };
}

function App({film}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Main film={film}/>}></Route>
          <Route path={AppRoute.Film} element={<Film/>}></Route>
          <Route path={AppRoute.AddReview} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReview/></PrivateRoute>}></Route>
          <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyList/></PrivateRoute>}></Route>
          <Route path={AppRoute.Player} element={<Player/>}></Route>
          <Route path={AppRoute.Login} element={<SignIn/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
