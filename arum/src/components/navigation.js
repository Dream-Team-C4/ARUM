import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

//import { Login } from "../Componentes/login.js";
import { ListaProductosClienteReact } from "../components/clientListaProductosReactTable.js";
import { CarritoCompras } from "../components/clientCarrito.js";
//import { CrearUsuarios } from "../Componentes/AdminCrearUsuarios.js";
import { FormularioAgregarProductos } from "../components/adminAgregarProducto.js";
import { TablaProductos } from "../components/adminListaProductosReactTable";
//import { ListaVentas } from "../components/adminListaVentas";
import { ListaVentasReact } from "../components/adminListaVentasReactTable";




export const Navegacion = ({ rol }) => {
  return (
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          
          <Route path="/AgregarProductos" element={<FormularioAgregarProductos />} />
          <Route path="/ListaProductosAdmin" element={<TablaProductos />} />
          <Route path="/ListaVentasAdmin" element={<ListaVentasReact />} />
          <Route path="/ListaProductosCliente" element={< ListaProductosClienteReact />} />
          <Route path="/CarritoCompras" element={< CarritoCompras />} />
          
        </Fragment>
      ) : (
        <Fragment>
          
          <Route path="/ListaProductosCliente" element={< ListaProductosClienteReact />} />
          <Route path="/CarritoCompras" element={< CarritoCompras />} />
        </Fragment>
      )}
    </Routes>
  );
};