import './App.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';
import data from '../components/lib/data.json';

function App() {
  return (
    <div className="page-wrapper">
      <div className='container'>
        <Sidebar />
        <div className='page-content'>
          <Header />
          <div className="movies-list-wrapper">
            {
              data.movies.map((movie, index) => (
                <Movie
                  key={index}
                  title={movie.Title}
                  poster={movie.Poster}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
