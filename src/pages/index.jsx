import CardRazasPerros from "components/CardRazasperros";
import pomerania from 'media/Pomerania.png';
import bichonMaltes from 'media/BichonMaltes.png';
import jackRussellTerrier from 'media/JackRussellTerrier.png';

function Index() {
    return (
        <section>
            <h1 className="titleSection">RAZAS DE PERROS</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros imagen={pomerania} nombreRaza='Pomerania' heart=' 2.5k' comment=' 1.2k' eye=' 3.1k' pagina='/pomerania' />
                <CardRazasPerros imagen={bichonMaltes} nombreRaza='Bichón Maltés' heart=' 2.8k' comment=' 1.1k' eye=' 3.5k' pagina='bichonmaltes' />
                <CardRazasPerros imagen={jackRussellTerrier} nombreRaza='Jack Russell Terrier' heart=' 3.2k' comment=' 1.8k' eye=' 4.2k' pagina='jackrussellterrier' />
            </ul>
        </section>
    )
}

export default Index;