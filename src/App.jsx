import Index from 'pages';
import Layout from 'layouts/layout';
import PomeraniaInfoPage from 'pages/pomerania';
import BichonMaltesInfoPage from 'pages/bichonmaltes';
import JackRussellTerrierInfoPage from 'pages/jackrussellterrier';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return ( 
    <div className='App'>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='pomerania' element={<PomeraniaInfoPage />} />
              <Route path='bichonmaltes' element={<BichonMaltesInfoPage />} />
              <Route path='jackrussellterrier' element={<JackRussellTerrierInfoPage />} />
              <Route path='/' element={<Index />} />
            </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;