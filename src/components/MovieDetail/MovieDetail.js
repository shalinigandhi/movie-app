import './movie-detail.scss';
const MovieDetail = ({ selectedMovie }) => {
    return (
        <div className="movie-detail-container">
            <div className="movie-image">
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            </div>
            <div className="movie-details">
                <p className="movie-name">{selectedMovie.Title}</p>
                <div className="imdb-rating-wrapper">
                    <div className="rating-outer">
                        <div className="rating-inner" style={{ width: ((selectedMovie.imdbRating / 10) * 100) + '%'}}></div>
                    </div>
                    <span className="rating">{selectedMovie.imdbRating}/10</span>
                </div>
                <p className='other-details'>
                    <span className='label'>Year:</span>
                    <span className='value'>{selectedMovie.Year}</span>
                </p>
                <p className='other-details'>
                    <span className='label'>Running Time:</span>
                    <span className='value'>{selectedMovie.Runtime}</span>
                </p>
                <p className='other-details'>
                    <span className='label'>Directed by:</span>
                    <span className='value'>{selectedMovie.Director}</span>
                </p>
                <p className='other-details'>
                    <span className='label'>Language:</span>
                    <span className='value'>{selectedMovie.Language}</span>
                </p>
                <p className='other-details description'>
                    {selectedMovie.Plot}
                </p>

                <div className='buttons-wrapper'>
                    <span className='btn primary-btn'>Play Movie</span>
                    <span className='btn hollow-btn'>Watch Trailer</span>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;