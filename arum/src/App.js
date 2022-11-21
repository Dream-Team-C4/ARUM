import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "../src/components/login.js";
import { ListaProductosClienteReact } from "../src/components/clientListaProductosReactTable.js";
import { CarritoCompras } from "../src/components/clientCarrito.js";
import { AgregarProductos } from "../src/components/adminAgregarProductoFetch.js";
//import { TablaProductos } from "../src/components/adminListaProductosReactTable";
import { ListaProductosAdmin } from "../src/components/adminListaProductosFetch.js";
import { ListaVentasReact } from "../src/components/adminListaVentasReactTable";
import {  ListaUsuarios} from "../src/components/adminListaUsuariosFetch";
import { AgregarUsuario } from "../src/components/adminCrearUsuarioFetch";

export default function App() {
 

  return (

     

    <Routes>
      
      
          <Route path="/" element={<Login />} />
          <Route path="/AgregarProductos" element={<AgregarProductos />} />
          <Route path="/ListaProductosAdmin" element={<ListaProductosAdmin />} />
          <Route path="/ListaVentasAdmin" element={<ListaVentasReact />} />
          <Route path="/ListaUsuarios" element={<ListaUsuarios />} />
          <Route path="/AgregarUsuario" element={<AgregarUsuario />} />
          <Route path="/ListaProductosCliente" element={< ListaProductosClienteReact />} />
          <Route path="/CarritoCompras" element={< CarritoCompras />} />
                 
            
    </Routes>


  );
}

