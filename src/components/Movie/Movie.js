import { IconPlay, IconAdd } from '../lib/icons';
import './movie.scss';

const Movie = ({ title, poster }) => {
    return (
        <div className="movie-container">
            <div className='movie-banner'>
                <img src={poster} alt={title} />
            </div>
            <p className='movie-name'>{title}</p>
            <div className='buttons'>
                <span className='button'><IconPlay/></span>
                <span className='button'><IconAdd/></span>
            </div>
        </div>
    )
}
export default Movie;