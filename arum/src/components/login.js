import { Fragment } from "react";
import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { SeccionHeader } from "../components/seccionHeader";


import JsonData from "../data/userData.json";


import '../Styles/Login.css';

export function Login() {

    const [data, setData] = useState({
        user: "",
        pass: "",
        rol: ""
      }
      )
    
      const [url, setURL] = useState("");

    return (

        

        <Fragment>
           <div className="container mt-5" align="center">
        <SeccionHeader/>
            <center>
            
                <div id="divLogin">
                
                    <h3>Ingreso Plataforma</h3>
                    <label>Usuario
                        <input type="text" onChange={(e) => {
                            setData({ ...data, user: e.target.value })
                        
                        } }></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Contraseña
                        <input type="pass" onChange={(e) => {
                            setData({ ...data, pass: e.target.value })
                            }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <Link to={url}>
                    <button onClick={VerInfo}>Ingresar</button>
                    </Link>
                </div>
            </center>

        </div>
        </Fragment>


    );

    function Validacion(usuarioNombre, contrasena) {

        /*const [dataUser, setDataUser] = useState([]);

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
        }*/


        var rol = "";
        //const datos = JSON.stringify(dataUser)  ; //Integra o con express o con mongoDb 
        const datos = JsonData
                   
                for (const usuario of datos) {            
            if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
                rol = usuario.rol;
            } 
        }

           


    return rol;
        
    }

    

    function VerInfo() {


        console.log(Validacion(data.user, data.pass))
        // eslint-disable-next-line eqeqeq

        
        if (Validacion(data.user, data.pass)=== "admin") {
            setURL("/ListaProductosAdmin")
        } else if (Validacion(data.user, data.pass)=== "client") {
            setURL("/ListaProductosCliente")
        } else{
            alert("Los datos ingresados son incorrectos")
        }
    }
    
}




