export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average?: number;
    genres?: Genre[];
}

export interface MovieCardProps {
    movie: Movie;
}

// Props interface for the PopularMovies component, which takes an array of movies.
export interface MovieListProps {
    movies: Movie[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface NavbarProps {
    query: string;
    getMovies: any;
    handleQueryInput: any;
}