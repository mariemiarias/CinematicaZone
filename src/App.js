
import './App.css';
import Contenido from './componentes/Contenido/Contenido';
import { Routes, Route } from 'react-router-dom';
import Carrito from './componentes/Carrito/Carrito';
import Login from './componentes/Login/Login';
import Productos from './componentes/Listadeproductos/Productos';
import Contacto from './componentes/Contacto/Contacto';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Contenido />}> </Route>
            <Route path='productos' element={<Productos />} />
            <Route path='carrito' element={<Carrito />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='login' element={<Login />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
