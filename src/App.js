import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
