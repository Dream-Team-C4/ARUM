import React from "react";
import { Link } from "react-router-dom";

export const MenuAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/AgregarProductos"}>Crear Nuevos productos
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to={"/ListaProductosAdmin"}>Lista productos</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to={"/ListaVentasAdmin"}>Lista de ventas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/ListaUsuarios"}>Lista de Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/AgregarUsuario"}>Crear Usuario
              </Link>
            </li>
            
                     
          </ul>
             
      </div>
    </nav>
  );
};