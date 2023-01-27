import React, { useState } from 'react'
import { IconPlay, IconAdd } from '../lib/icons';
import './movie.scss';

const Movie = ({ id, movie }) => {
    const [active, setActive] = useState();
   
    return (
        <div
            key={id}
            className={`movie-container ${active === id ? 'active' : 'inactive'}`}
            onClick={() => setActive(id)}
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