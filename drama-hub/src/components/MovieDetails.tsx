import '../MovieDetails.css';
import React, {useState, useEffect, useRef} from 'react';
import { IGenre, IMovieDetails, IProductionCountry } from '../utils';
import axios from 'axios';
import wednesdayPoster from '../assets/images/wednesday_potrait.jpg';
import { useParams, useNavigate } from 'react-router-dom';


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate();
    const detailsRef = useRef<HTMLDivElement | null>(null); // Create a ref for the details section

    useEffect (() => {
        const movieId = localStorage.getItem('selectedMovieId');
        if (id) {
            fetchMovieDetails(id);
        } else {
            console.log("No Movie selected. Please go back and select a movie");
            setLoading(false)
        }
        // clear localStorage when the component is unmounted
        return () => {
            localStorage.removeItem('selectedMovieId');
        };
    }, []);

    const fetchMovieDetails = async (id: string) => {
        const MOVIE_DETAILS_URL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

        try {
            const response = await axios.get(MOVIE_DETAILS_URL);
            const data = response.data;

            const genres: string[] = data.genres.map((genre: IGenre) => genre.name);
            const countries: string = data.production_countries.map((country: IProductionCountry) => country.name).join(',');

            const movieData: IMovieDetails = {
                title: data.title,
                backdrop_path: `${IMAGE_BASE_URL}${data.backdrop_path}`,
                poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
                genres: `${data.genres.map((genre: {name: string}) => genre.name).join(', ')}`,
                countries: `${data.production_countries.map((country: {name: string}) => country.name).join(", ")}`,
                release_date: data.release_date,
                rating: `${data.vote_average.toFixed(1)}/10`,
                description: data.overview,
                tagline: data.tagline,
                homepage: data.homepage,
                duration: data.runtime,
            };
            setMovieDetails(movieData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movies details: ", error);
            setLoading(false);
        }
    };

    const handleBackButtonClick = (e: React.MouseEvent) => {
        navigate('/');          // Redirect to the previous page 
    };

    const handleSeeDetailsClick = () => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the details section
        }
    };

    if (loading) {
        return <div>Loading...</div>   // Loading state
    }

    if(!movieDetails) {
        return <div>No Movie selected. Please go back and select a movie</div>  //
    }

    return(
        <>
            {/* <!-- Hero Section --> */}
            <section className="hero">
                <h1 
                className="movie-title galada-regular"
                style={{
                    backgroundImage: `url(${movieDetails.backdrop_path || wednesdayPoster})`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    width:'100vw',
                    height: '100vh',
                
                }} 
                >
                    <button id="details-button" onClick={handleSeeDetailsClick}>See details below</button>
                </h1>
            </section>

            {/* <!-- Movie Details Section --> */}
            <section className="movie-details" ref={detailsRef}>
                <div className="details-text">
                    <h2>{movieDetails.title}</h2>
                    <div className="info">
                        <span>📅 {movieDetails.release_date}</span>
                        <span>⭐ {movieDetails.rating}</span>
                        <span>🌍 {movieDetails.countries}</span>
                    </div>
                    <p className="playfair-display-span" style={{color: 'white', width: '700px' }}>
                        {movieDetails.description}
                    </p>
                    <table>
                        <tr><td><strong>Tagline:</strong></td><td>{movieDetails.tagline || 'N/A'}</td></tr>
                        <tr><td><strong>Duration:</strong></td><td>{movieDetails.duration} mins</td></tr>
                        <tr><td><strong>Genre:</strong></td><td>{movieDetails.genres}</td></tr>
                        <tr><td><strong>Homepage:</strong></td><td>
                            {movieDetails.homepage ? (
                                <a href={movieDetails.homepage}
                                target='_blank'
                                rel="noopener noreferrer"
                                style={{ color: "blue", textDecoration: "underline"}}
                                >
                                    {movieDetails.homepage}
                                </a>
                            ) : (
                                'Homepage unavilable'
                            )} 
                            </td></tr>
                    </table>
                    
                    <div>
                        <div className="backBtn" onClick={handleBackButtonClick}>Back</div>
                    </div>
                </div>
                <div className="details-poster">
                    <img src={movieDetails.poster_path} alt={movieDetails.title}/>
                </div>
            </section>       
        </>
    )
}

export default MovieDetails;