import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import {fetchFilmsAction} from '../api-actions';
import {changeGenre} from '../action';

const initialState: FilmsData = {
  genre: 'All genres',
  allFilms: [],
  films: [],
  isFilmsDataLoading: false,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeGenre, (state, action) => {
        const {genre} = action.payload;
        state.genre = genre;
        state.films = state.allFilms.filter((el) => state.genre === initialState.genre ? state.allFilms : el.genre === state.genre);
      })
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.allFilms = action.payload;
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
      });
  }
});
