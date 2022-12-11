import {Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getAuthCheckedStatus} from '../../store/user-process/selectors';
import {getFilmsDataLoadingStatus} from '../../store/films-data/selectors';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import Loader from '../../pages/loader/loader';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);

  if (!isAuthChecked || isFilmsDataLoading) {
    return (
      <Loader />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop/>
        <Routes>
          <Route index element={<Main/>}></Route>
          <Route path={`${AppRoute.Film}/:id`} element={<Film/>}></Route>
          <Route path={`${AppRoute.Film}/:id${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview/>
            </PrivateRoute>
          }
          >
          </Route>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList/>
            </PrivateRoute>
          }
          >
          </Route>
          <Route path={`${AppRoute.Player}/:id`} element={<Player/>}></Route>
          <Route path={AppRoute.Login} element={<SignIn/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
