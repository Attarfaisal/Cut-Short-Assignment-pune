import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage';
import FourthPage from './Components/FourthPage';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
        <Route path='/' element={<FirstPage />} /> 
        <Route path='/create' element={<SecondPage />} />
        <Route path='/thirdpage' element={<ThirdPage />} />
        <Route path='/fourthpage' element={<FourthPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
