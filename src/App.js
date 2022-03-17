import logo from './logo.svg';
import './styles/styles.css';
import dog from './media/dog.png'
import pomerania from './media/Pomerania.png';
import bichonMaltes from './media/BichonMaltes.png';
import jackRussellTerrier from './media/JackRussellTerrier.png';


function App() {
  return (
    <div className="App">
          <header>
        <ul className="navbar">
            <li>
                <img src={dog} alt="Imagen" class="logo" />
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" type="text" />
                    <i className="fas fa-search button"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Iniciar sesión</button>
            </li>
            <li>
                <button className="button mainButton">Registrarme</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1 className="titleSection">RAZAS DE PERROS</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={pomerania} alt="Pomerania"/>   
                    </div>
                    <span className="breedTitle">
                        Pomerania
                    </span>
                    <div className="cardView">
                        <i className="fas fa-heart"> 2.5k</i>
                        <i className="fas fa-comment"> 1.2k</i>
                        <i className="fas fa-eye"> 3.1k</i>
                    </div>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={bichonMaltes} alt="Bichón Maltés"/>
                    </div>
                    <span className="breedTitle">
                        Bichón maltés
                    </span>
                    <div className="cardView">
                        <i className="fas fa-heart"> 2.8k</i>
                        <i className="fas fa-comment"> 1.1k</i>
                        <i className="fas fa-eye"> 3.5k</i>
                    </div>
                </li>
                <li className="breedCard" >
                    <div className="contenedorImagen">
                        <img src={jackRussellTerrier} alt="Jack Russell Terrier"/> 
                    </div>
                    <span className="breedTitle">
                        Jack Russell Terrier
                    </span>
                    <div className="cardView">
                        <i className="fas fa-heart"> 3.2k</i>
                        <i className="fas fa-comment"> 1.8k</i>
                        <i className="fas fa-eye"> 4.2k</i>
                    </div>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;