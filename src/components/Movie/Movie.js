import React, { useState } from 'react'
import { IconPlay, IconAdd } from '../lib/icons';
import './movie.scss';

const Movie = ({ id, movie, showMovieDetails }) => {
    const [active, setActive] = useState(null);

    const handleClick = (id, movie) => {
        let element = document.getElementsByClassName('activeMovie');
        if (element && element.length) {
            element[0].classList.remove("activeMovie");
        }
        document.getElementById(id).classList.add("activeMovie");
        setActive(id);
        showMovieDetails(movie);
    }
    return (
        <div
            key={id}
            className={`movie-container`}
            id={id}
            onClick={() => handleClick(id, movie)}
        >
            <div className='movie-short'>
                <div className='movie-banner'>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <p className='movie-name'>{movie.Title}</p>
                <div className='buttons'>
                    <span className='button'><IconPlay/></span>
                    <span className='button'><IconAdd/></span>
                </div>
            </div>
        </div>
    )
}
export default Movie;