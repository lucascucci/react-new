import './navBar.css'

const Header = () => {
    return (
    <><div className="logo">
        <h1>Tienda Online</h1>
    </div>
    <div className="lista">
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Ubicacion</a></li>
            </ul>
    </div>
    <div className="carrito"> Carrito 5 <i class="fa-sharp fa-solid fa-cart-shopping"></i></div></>
    );
}

export default Header;