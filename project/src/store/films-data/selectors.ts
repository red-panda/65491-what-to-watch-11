import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Movie, Movies} from '../../types/films';

export const getGenre = (state: State): string => state[NameSpace.Films].genre;
export const getSortedFilms = (state: State): Movies => state[NameSpace.Films].sortedFilms;
export const getFilms = (state: State): Movies => state[NameSpace.Films].films;
export const getMainFilm = (state: State): Movie | null => state[NameSpace.Films].mainFilm;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmsDataLoading;
