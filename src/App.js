import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage/>
    </div>
  );
}

export default App;
