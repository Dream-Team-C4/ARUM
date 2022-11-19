import { Fragment } from "react";
import { useState } from "react";
import JsonData from "../data/UserData.json";

import '../Styles/Login.css';

export function Login() {

    const [data, setData] = useState({
        user: "",
        pass: "",
        data: ""
    }
    )


    return (

        <Fragment>
            <center>
                <div id="divLogin">
                    <h3>Ingreso Plataforma</h3>
                    <label>Usuario
                        <input type="User" onChange={(e) => {
                            setData({ ...data, user: e.target.value })
                        }
                        } ></input>
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
                    <button onClick={VerInfo} >Ingresar</button>

                </div>
            </center>
        </Fragment>


    );

function Validacion(usuarioNombre, contrasena) {

        var decision = false;
        var datos = JsonData; //Integra o con express o con mongoDb   


        for (const usuario of datos) {            
            if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
                decision = true;
            } 
        }
        return decision;
    }

    

    function VerInfo() {

        // eslint-disable-next-line eqeqeq

        console.log(Validacion(data.user, data.pass))
        if (Validacion(data.user, data.pass)) {
            alert("El usuario ingresado es correcto")
        } else {
            alert("Por favor verifique los datos ingresados")
        }
    }
}




