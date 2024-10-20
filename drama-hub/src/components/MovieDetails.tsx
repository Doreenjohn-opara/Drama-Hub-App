const MovieDetails = () => {
    return(
        <>
            {/* <!-- Header Section --> */}
            <header>
                <div className="logo">Drama Hub</div>
            </header>

            {/* <!-- Hero Section --> */}
            <section className="hero">
                <h1 className="movie-title galada-regular" >Movie Title</h1>
                <button id="details-button">See details below</button>
            </section>

            {/* <!-- Movie Details Section --> */}
            <section className="movie-details">
                <div className="details-text">
                    <h2>Movie title</h2>
                    <div className="info">
                        <span>📅 Mar 21, 2019</span>
                        <span>⭐ IMDB: 5.8/10</span>
                        <span>🌍 USA</span>
                    </div>
                    <p className="playfair-display-span">
                        Pellentesque quis dui varius, dapibus velit id, iaculis ipsum. Morbi ac eros feugiat, lacinia elit ut elementum turpis.
                        Curabitur justo sapien, tempus sit amet rutrum eu, commodo eu lacus.
                    </p>
                    <table>
                        <tr><td><strong>Country:</strong></td><td>USA</td></tr>
                        <tr><td><strong>Cast:</strong></td><td>Sofia Mali, Jennifer Garner, Ken Hudson Campbell</td></tr>
                        <tr><td><strong>Duration:</strong></td><td>1h 29m</td></tr>
                        <tr><td><strong>Genre:</strong></td><td>Animation, Adventure, Comedy</td></tr>
                    </table>
                </div>
                <div className="details-poster">
                    <img src="/images/enders-game.jpg" alt="enders game poster"/>
                </div>
            </section>
                
                </>
    )
}


export default MovieDetails;