import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../components/const';
import {changeGenre, loadFilms, setFilmsDataLoadingStatus, requireAuthorization, saveUser} from './action';
import {Movies} from '../types/films';

type InitalState = {
  genre: string;
  allFilms: Movies;
  films: Movies;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  user: {
    avatarUrl: string;
    email: string;
    id: number;
    name: string;
    token: string;
  } | null;
}

const initialState: InitalState = {
  genre: 'All genres',
  allFilms: [],
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
      state.films = state.allFilms.filter((el) => state.genre === initialState.genre ? state.allFilms : el.genre === state.genre);
    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.films = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
