import './App.css';
import NavBar from './components/navBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItenListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './container/CartContainer';
import ShopProvider from './context/ShopProvider';
/*import { useEffect } from 'react';
import algoritmoGuardadoAutomático from './services/guardarProductos';*/

function App() {

/*useEffect(()=> {
    console.log;
    algoritmoGuardadoAutomático();
  }, [])*/


  return (
    <ShopProvider>
      <BrowserRouter>
      <NavBar />      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}
export default App;
