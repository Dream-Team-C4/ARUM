import './App.css';

import {SeccionHeader} from "./components/seccionHeader.js";
import { FormularioAgregarProductos } from "./components/adminAgregarProducto.js";
import {ListaProductosAdmin } from "./components/adminListaProductos.js";
import { ListaVentas } from "./components/adminListaVentas";
import { ListaProductosCliente } from "./components/clientListaProductos";
import { CarritoCompras} from "./components/clientCarrito";

function App() {
  return (
   <>
   
   <SeccionHeader/> 
   <br></br>
   <FormularioAgregarProductos/> 
   <br></br>
   <ListaProductosAdmin />
   <br></br>
   <ListaVentas />
   <br></br>
   <ListaProductosCliente />
   <br></br>
   <CarritoCompras />

   
   </>
  );
}

export default App;
