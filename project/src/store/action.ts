import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../components/const';
import {Movies} from '../types/films';
import {UserData} from '../types/user-data';

export const changeGenre = createAction<{genre: string}>('catalog/changeGenre');

export const loadFilms = createAction<Movies>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const saveUser = createAction<UserData>('user/save');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
