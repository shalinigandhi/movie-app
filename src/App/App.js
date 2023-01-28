import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import data from '../components/lib/data.json';
import './App.scss';

function App() {
  const [movies, setMovies] = useState(data.movies);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedMovie, showSelectedMovie] = useState(null);
  const [isSidebarOpen, onToggle] = useState(true);

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

  const showMovieDetails = (movie) => {
    showSelectedMovie(movie);
    console.log(selectedMovie);
  }

  return (
    <div className="page-wrapper">
      <div className='container'>
        <Sidebar
          onToggle={onToggle}
          isSidebarOpen={isSidebarOpen}
        />
        <div className={`page-content-container ${isSidebarOpen && 'page-overlay'}`} onClick={() => onToggle(false)}>
          <Header
            onSearch={onSearch}
            resetSearch={resetSearch}
          />
          <main className="page-content-wrapper">
            {
              selectedMovie && Object.keys(selectedMovie).length &&
              <MovieDetail
                selectedMovie={selectedMovie}
              />
            }
            {
              movies && movies.length ?
                <div className="movies-list-wrapper">
                  {
                    movies.map((movie, index) => (
                      <Movie
                        key={index}
                        id={index}
                        movie={movie}
                        showMovieDetails={showMovieDetails}
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
