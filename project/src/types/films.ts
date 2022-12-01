export type Movie = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  isFavorite: boolean;
  previewVideoLink: string;
  genre: string;
  released: number;
  videoLink: string;
}

export type Movies = Movie[];
