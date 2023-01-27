import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';
import data from '../components/lib/data.json';
import './App.scss';

function App() {
  const [movies, setMovies] = useState(data.movies);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSearch = (movieName) => {
    const tempMovies = [...data.movies];
    const searchedMovies = tempMovies.filter((movie) => (
      (movie.Title).replace(/\s/g, '').toLowerCase().includes((movieName).replace(/\s/g, '').toLowerCase())
    ))
    if (searchedMovies && searchedMovies.length) {
      setMovies(searchedMovies);
    } else {
      setMovies(null);
      setErrorMessage('No results found for your search.');
    }
  }

  const resetSearch = () => {
    setMovies([...data.movies]);
  }

  return (
    <div className="page-wrapper">
      <div className='container'>
        <Sidebar />
        <div className='page-content-container'>
          <Header
            onSearch={onSearch}
            resetSearch={resetSearch}
          />
          <main className="page-content-wrapper">
            {
              movies && movies.length ?
                <div className="movies-list-wrapper">
                  {
                    movies.map((movie, index) => (
                      <Movie
                        key={index}
                        id={index}
                        movie={movie}
                      />
                    ))
                  }
                </div>
                :
                <p className='error'>{errorMessage}</p>
            }
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
