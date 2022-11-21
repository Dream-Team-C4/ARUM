import '../Styles/table.css';
import { useState, useEffect } from "react";
import { MenuAdmin } from "../components/navMenuAdmin.js";
import { SeccionHeader } from "../components/seccionHeader";

export const ListaProductosAdmin = () => {

const [dataProd, setDataProd] = useState([]);

useEffect(()=>{
  getData();
}, [])

function getData() {
  fetch("http://localhost:5000/Productos/Listar")
  .then((resp) => resp.json())
  .then((resp) => {
      return setDataProd(resp)
  })
  .catch((err) => console.log(err));
}


return (

  <div className="container mt-5" align="center">
    <SeccionHeader/>
      <div><MenuAdmin/></div>
      <h2> Lista de productos</h2>

      <table className="table table-bordered" style={{ border: 'solid 1px green', width:'1200px'  }}>
          <thead className="thead-dark" id="columna">
              <tr>
                        <td>ID </td>
                        <td>NOMBRE PRODUCTO </td>
                        <td>DESCRIPCION PRODUCTO </td>
                        <td>PRECIO UNITARIO</td>
                        <td>STOCK </td>
                        <td>IMAGEN </td>
              </tr>
          </thead>
          <tbody>
              {dataProd.map((Producto) => (
                  <tr key={Producto.id}>
                      <td>{Producto.id}</td>
                      <td>{Producto.nombre}</td>
                      <td>{Producto.desc}</td>
                      <td>{Producto.precio}</td>
                      <td>{Producto.stock}</td>
                      <td><img src={Producto.imagen} alt="Arum" width={100}></img></td>
                      <td> <button >MODIFICAR PRODUCTOS</button> </td>
                  </tr>
              ))}

          </tbody>
      </table>
  </div>
);

/*unction ModificarProducto(){

const datosJSON = JSON.stringify(dataProd)       
            
    
            fetch("http://localhost:5000/Productos/Modificar/:id", {
                method: "PUT",
                body: datosJSON,
                headers: {
                    "Content-Type": "application/json",
                },
    
            })
    
            //Comprobacion  de los datos
            
            alert("Datos almacenados correctamente")
          
        }*/
      }
