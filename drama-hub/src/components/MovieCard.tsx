import React, { useState, useEffect } from "react";
import { Movie, Genre } from "../utils/index";
import { Link } from "react-router-dom";
import { MovieCardProps } from "../utils/index";


const MovieCard: React.FC<MovieCardProps>= ({ movie }) => {
    const { poster_path, title, release_date, genres = [], vote_average } = movie;
    const [getGenres, setGetGenres] = useState<Genre[]>([]);

  // Fetch genres and match with movie's genre IDs
  const getGenresForMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      // console.log("All Genres:", data.genres);

      const matchedGenres = genres.map((genre) =>
        data.genres.find((g: Genre) => g.id === genre.id)
      ).filter(Boolean); // Filter out unmatched genres

      // console.log("Matched Genres:", matchedGenres);
      setGetGenres(matchedGenres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    getGenresForMovie();
  }, [movie]);

 return (
    <>
        {/* <div className="movie-card"> 
        <Link to={`/movie/${movie.id}`}>
           <img
           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
           alt={movie.title}
           className="movie-poster"
           />
           <div className="movie-info">
            <div className="outer-info">
                <h3>{movie.title}</h3>
                <p>{new Date(movie.release_date).getFullYear()}</p>
            </div>
            <div className="inner-info">
                <p>{movie.rating}</p>
                {/* <p>{movie.genres.map((genre: any) => genre.name).join(", ")}</p> */}
            {/* </div>
           </div>
        </Link>
    </div> */}


    <div className="movie-card">
      <div className="poster-container">
        <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${poster_path}`} alt={title} className="movie-poster" />
        <div className="genre">
        {genres.length > 0 && (
          <div className="genres-container">
            {genres.map((genre: any) => (
              <span key={genre.id} className="genre-badge">{genre.name}</span>
              ))}
          </div>
        )}
        </div>
        
        
        <div className="rating-badge">{vote_average ? vote_average.toFixed(1): "N/A"}</div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{new Date(release_date).getFullYear()}</p>
      </div>
    </div>
    </>
    
    
 )
}

export default MovieCard;