import './App.css';
import CartasCompletas from './componentes/Laptop/Laptop';
import Header from './componentes/NavBar/NavBar';



export default function App() {
  return (
    <>
    <div><Header/></div>
    <div>
      <CartasCompletas />
    </div>
    </>
  );
}