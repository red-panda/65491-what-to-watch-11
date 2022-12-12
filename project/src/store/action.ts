import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';
import {UserData} from '../types/user-data';

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
export const changeGenre = createAction<string>('catalog/changeGenre');
export const saveUser = createAction<UserData>('user/save');
