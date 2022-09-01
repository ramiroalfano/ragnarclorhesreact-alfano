import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './container/ItenListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola! Bienvenido a nuestra pagina web"}/>
    </>
  );
};
export default App;
