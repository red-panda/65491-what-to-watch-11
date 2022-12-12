import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import {fetchFilmsAction, fetchMainFilmAction} from '../api-actions';
import {changeGenre} from '../action';

const initialState: FilmsData = {
  genre: 'All genres',
  films: [],
  sortedFilms: [],
  mainFilm: null,
  isFilmsDataLoading: false,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.sortedFilms = state.films.filter((el) => state.genre === initialState.genre ? state.films : el.genre === state.genre);
      })
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.sortedFilms = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchMainFilmAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchMainFilmAction.fulfilled, (state, action) => {
        state.mainFilm = action.payload;
        state.isFilmsDataLoading = false;
      });
  }
});
