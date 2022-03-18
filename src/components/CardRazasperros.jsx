function CardRazasPerros({ imagen, nombreRaza, heart, comment, eye}) {
    return (
        <li className="breedCard" >
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreRaza}/> 
            </div>
            <span className="breedTitle">{nombreRaza}</span>
            <div className="cardView">
                <i className="fas fa-heart">{heart}</i>
                <i className="fas fa-comment">{comment}</i>
                <i className="fas fa-eye">{eye}</i>
            </div>
        </li>
    );
}

export default CardRazasPerros;