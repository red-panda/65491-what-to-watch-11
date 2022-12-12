import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Movie, Movies} from './films';
import {UserData} from './user-data';


export type FilmsData = {
  genre: string;
  films: Movies;
  sortedFilms: Movies;
  mainFilm: Movie | null;
  isFilmsDataLoading: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
