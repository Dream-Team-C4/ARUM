import '../Styles/table.css';
import { useState, useEffect } from "react";
import { MenuAdmin } from "../components/navMenuAdmin.js";
import { SeccionHeader } from "../components/seccionHeader";

export const ListaUsuarios = () => {

const [dataUser, setDataUser] = useState([]);

useEffect(()=>{
  getData();
}, [])

function getData() {
  fetch("http://localhost:5001/Usuarios/Listar")
  .then((resp) => resp.json())
  .then((resp) => {
      return setDataUser(resp)
  })
  .catch((err) => console.log(err));
}


return (

  <div className="container mt-5" align="center">
    <SeccionHeader/>
      <div><MenuAdmin/></div>
      <h2> Lista de Usuarios</h2>

      <table className="table table-bordered" style={{ border: 'solid 1px green', width:'700px'  }}>
          <thead className="thead-dark" id="columna">
              <tr>
                        
                        <td>NOMBRE USUARIO </td>
                        <td>PASSWORD</td>
                        <td>ROL </td>
              </tr>
          </thead>
          <tbody>
              {dataUser.map((Usuario) => (
                  <tr key={Usuario._id}>
                      <td>{Usuario.user}</td>
                      <td>{Usuario.pass}</td>
                      <td>{Usuario.rol}</td>
                      <td> <button>MODIFICAR USUARIO</button> </td>
                  </tr>
              ))}

          </tbody>
      </table>
  </div>
)
}
