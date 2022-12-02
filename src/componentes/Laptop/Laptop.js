import CardPrincipal from '../CardPrincipal/CardPrincipal';
import './laptop.css';

import { laptops } from "./ArrayLaptop";

const CartasCompletas = () => {
    return (
        <div className="estiloCarta">
            {laptops.map((laptop) => (
                <CardPrincipal
                titulo={laptop.titulo}
                imagen={laptop.imagen}
                id={laptop.id}
                precio={laptop.precio}
                detalle={laptop.detalle}
        />
            ))}
        </div>
    );
};

export default CartasCompletas;
