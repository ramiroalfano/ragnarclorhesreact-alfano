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

function App() {

  // const categorias = ["Electronics", "Audio & Video", "Clothing"]

  return (
    <BrowserRouter>
      <NavBar />      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
