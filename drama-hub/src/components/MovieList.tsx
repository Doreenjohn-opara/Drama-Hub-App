import React, { ChangeEvent, FC, FormEvent, useState, useEffect } from 'react';
import { MovieListProps, Movie } from "../utils/index";
import Navbar from './Navbar';
import MovieCarousel from './MovieCarousel';
import PopularMovies from './PopularMovies';
import MovieCard from './MovieCard';
import axios from 'axios';
import { Link } from 'react-router-dom';


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const MovieList:FC<MovieListProps> = ({ movies }) => {
  const [getMoviesList, setGetMoviesList] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false); // To track if we are in search mode
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchMovies = async (query:string, page: number = 1) => {
    setIsLoading(true);
      try {
        if (query.trim() === "") {
          console.log("Search query is empty");
          return;
        }

        const searchData = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
        if (searchData.data.results) {
          setGetMoviesList(searchData.data.results);
          setTotalPages(searchData.data.total_pages); // Set total pages from search results
          setCurrentPage(page); // Update current page to the new page
          setIsSearching(true); // Set searching mode
        } else {
          console.log("No movies found");
        }
      } catch (error) {
        console.log("Error fetching search results: ", error)
      } finally {
        setIsLoading(false);
      }
  }

  const fetchPopularMovies = async (page:number) => {
    setIsLoading(true);
    try {
      const popularMoviesData = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
      if (popularMoviesData.data.results) {
        setGetMoviesList(popularMoviesData.data.results);
        setTotalPages(popularMoviesData.data.total_pages);
        setCurrentPage(page);
        setIsSearching(false); // Reset searching mode
  }
  } catch (error) {
    console.log("Error fetching popular movies: ", error)
    } finally {
      setIsLoading(false);
    }
    }
    
   // Fetch popular movies on initial load
  useEffect(() => {
    fetchPopularMovies(currentPage);
  }, [currentPage]);

  // Smooth scroll functionality to movie list
  const scrollToMovies = () => {
    const movieContainer = document.getElementById('movie-container');
    if (movieContainer) {
      window.scrollTo({
      top: movieContainer.offsetTop,
      behavior: 'smooth',
    });
  }
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setCurrentPage(1);
      searchMovies(searchQuery, 1);   
      scrollToMovies()
    }
  }

  const handleQueryInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // handle Pagination
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      if(isSearching) {
        searchMovies(searchQuery, newPage);
      } else {
        fetchPopularMovies(newPage);
      }
      setCurrentPage(newPage)
    } else {
      console.log('Invalid Page Number')
    }
  };

    return (
      <>
        <div className="container">
          <Navbar query={searchQuery} getMovies={handleSearchSubmit} handleQueryInput={handleQueryInput}/>
          <MovieCarousel />
          <section className="movies-section" id="movie-container">
            <div className={`movies-container ${isLoading ? 'loading' : 'loaded'}`}>
              <h2 className='movies-header'>{getMoviesList.length > 0 ? (isSearching ? 'Search Results': 'Popular Movies'): ''}</h2>
              <div className='search-results-container'>
              {getMoviesList.length > 0 ? (
              <div className="search-results">
                {getMoviesList.map((movie) => (
                  <Link to={`/movie/${movie.id}`} key={movie.id}>   {/* Link to Movie Details */}
                    <MovieCard movie={movie} />
                  </Link>
                ))}
              </div>
            ) : (
              <PopularMovies movies={movies} />
            )}
              </div>
            
              
              <div className="tv-shows-container" id="tv-shows">
                {/* <!-- TV Shows card will be dynamically rendered here --> */}
              </div>

              {/* <!-- Loading Spinner --> */}
              {isLoading && (
              <div className="loading-spinner" id="loadingSpinner">
                <div className="spinner"></div>
                <p>Loading movies...</p>
              </div>
              )}

              {/* <!-- Pagination Controls --> */}
              <div className="pagination" id="paginationBtn">
                <button 
                onClick={() =>handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || isLoading}
                className="pagination-btn" 
                id="prevBtn">
                  Prev
                </button>
                <span>
                  page {currentPage} of {totalPages}
                </span>
                <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || isLoading}
                className="pagination-btn" 
                id="nextBtn">
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}

export default MovieList;
