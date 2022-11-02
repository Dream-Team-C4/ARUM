import './App.css';

import {SeccionHeader} from "./components/seccionHeaderPF.js";
import { FormularioAgregarProductos } from "./components/adminAgregarProducto.js";
import {ListaProductosAdmin } from "./components/adminListaProductos.js";

function App() {
  return (
   <>
   
   <SeccionHeader/> 
   <br></br>
   <FormularioAgregarProductos/> 
   <br></br>
   <ListaProductosAdmin />
   
   </>
  );
}

export default App;
