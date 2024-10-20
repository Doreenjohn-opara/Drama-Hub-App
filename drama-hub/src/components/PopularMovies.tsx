import React from 'react';
import MovieCard from './MovieCard';
import { MovieListProps } from "../utils/index";

const PopularMovies: React.FC<MovieListProps> = ({ movies })=> {
  return (
    <>
      <div className="popular-movies-header">
        <h2 id="popularMoviesTitle">Popular Movies</h2>
      </div>
      <div className="popular-movies-container" id="popular-movies">
        {/* Movie would be dynamically populated here */}
        <div className="movieCard-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} /> // Pass each movie object as props
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularMovies;