import './App.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

function App() {
  return (
    <div className="page-wrapper">
      <div className='container'>
        <Sidebar />
        <div className='page-content'>
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
