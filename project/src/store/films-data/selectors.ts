import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Movies} from '../../types/films';

export const getGenre = (state: State): string => state[NameSpace.Films].genre;
export const getFilms = (state: State): Movies => state[NameSpace.Films].films;
export const getAllFilms = (state: State): Movies => state[NameSpace.Films].allFilms;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmsDataLoading;
