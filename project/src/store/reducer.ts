import {createReducer} from '@reduxjs/toolkit';
import {changeGenre} from './action';
import {films} from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
      state.films = films.filter((el) => state.genre === initialState.genre ? films : el.genre === state.genre);
    });
});

export {reducer};
