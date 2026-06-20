export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MovieDetails extends Movie {
  Plot: string;
  Genre: string;
  Runtime: string;
  imdbRating: string;
}
