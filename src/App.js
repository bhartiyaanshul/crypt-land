import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CryptLand } from './pages/CryptLand/CryptLand';
import { Newsify } from './pages/Newsify/Newsify';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CryptLand/>}/>
        <Route path='/newsify' element={<Newsify/>}/>
      </Routes>
    </div>
  );
}

export default App;
