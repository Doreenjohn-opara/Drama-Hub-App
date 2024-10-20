import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { Movie } from "./utils/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/App.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(POPULAR_MOVIES_URL);
      setMovies(response.data.results);
      setLoading(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(); // call the function inside the useEffect.
  }, []); // Empty dependency array to run only once on mount.

  return (
    <>
    
      <MovieList movies={movies} />
    </>
  );
};

export default App;
