import Index from 'pages';
import PomeraniaInfoPage from 'pages/pomerania';
import BichonMaltesInfoPage from 'pages/bichonmaltes';
import JackRussellTerrierInfoPage from 'pages/jackrussellterrier';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  return ( 
    <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='pomerania' element={<PomeraniaInfoPage />} />
                <Route path='bichonmaltes' element={<BichonMaltesInfoPage />} />
                <Route path='jackrussellterrier' element={<JackRussellTerrierInfoPage />} />
                <Route path='/' element={<Index />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;