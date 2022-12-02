import './cardPrincipal.css';

import Card from '../Card/Card';

import Img from '../Img/Img';

const CardPrincipal = ({titulo, id, precio, detalle, imagen}) => {
    return (
        <Card>
            <p className= "cartaPrincipal">
                {titulo}
            </p>
            <Img src={imagen}/>
            <p>{id}</p>
            <p>{precio}</p>
            <p>{detalle}</p> 
        </Card>
    );
};

export default CardPrincipal;