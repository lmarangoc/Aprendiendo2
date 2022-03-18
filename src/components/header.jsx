import dog from 'media/dog.png'

const Header = () => {
    return (
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
    )
};

export default Header;

//const variableNumerica = 1;
//const variableTexto = 'esto es un texto';
//const variableArray = [1, 2, 3, 4, 5];
//const variableObjeto = {
//    llave1: 'valor1',
//    llave2: 'valor2',
//    llave3: 'valor3',
//};
//const listObjetos = [
//    {
//    llave1: 'valor1',
//    llave2: 'valor2',
//    llave3: 'valor3',
//    },
//    {
//    llave1: 'valor1',
//    llave2: 'valor2',
//    llave3: 'valor3',
//    },
//    {
//    llave1: 'valor1',
//    llave2: 'valor2',
//    llave3: 'valor3',
//    },
//];
//const nombreFuncion = (in1, in2, in3) => {
//    return 'retorno de la función'
//};
//function nombreFuncion(in1, in2, in3) {
//    return 'retorno de la funcion';
//}