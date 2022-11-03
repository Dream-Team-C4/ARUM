import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {SeccionHeader} from "./components/seccionHeader.js";
import { FormularioAgregarProductos } from "./components/adminAgregarProducto.js";
import {ListaProductosAdmin } from "./components/adminListaProductos.js";
import { ListaVentas } from "./components/adminListaVentas.js";
import { ListaProductosCliente } from "./components/clientListaProductos.js";
import { CarritoCompras} from "./components/clientCarrito.js";
import { TablaProductos } from "./components/adminListaProductosReactTable.js";

function App() {
  return (
   <>
   
   <SeccionHeader/> 
   <br></br>
   <FormularioAgregarProductos/> 
   <br></br>
   <TablaProductos />
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
