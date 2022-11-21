import { Fragment } from "react";
import { useState } from "react";
import '../Styles/agregarProducto.css';
import { MenuAdmin } from "../components/navMenuAdmin.js";
import { SeccionHeader } from "../components/seccionHeader";


export function AgregarUsuario(){

    const [data,setData] = useState({
        
        user : "",
        pass : "",
        rol : "",
        
    }
    )

    return(

    <Fragment>

    <div className="container mt-5" align="center">
    <SeccionHeader/>
        <div><MenuAdmin/></div>
        <center>
        
        <div id="divAdd">
        
            <label > Nombre del Usuario </label>
            
                <input type="text" class="form" id="info1" required onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, user: e.target.value})
                }
                }></input>
           
            <br></br>
            <br></br>

            <label > Contraseña </label>
            
                <input type="password" class="form" id="info2" required onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, pass: e.target.value})
                }
                }></input>
           
            <br></br>
            <br></br>
            <label> Rol </label>
            
            <select name="rol" id="info3" required onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, rol: e.target.value})
                }
            }>
                    
                    <option value="admin">admin</option>
                    <option value="client">client</option> 
                    
                    </select>
                        
          
            <br></br>
            <br></br>
            
            
              <button onClick={CrearUsuario}>Agregar</button> 
              <br></br> 
              <br></br>   
              <button onClick={CancelarInfo} >Borrar Datos</button>    
                              
        </div>

        </center>

        </div>
    </Fragment>


    );
     function CrearUsuario() {
       
        
            const datosJSON = JSON.stringify(data)       
            
    
            fetch("http://localhost:5001/Usuarios/Agregar", {
                method: "POST",
                body: datosJSON,
                headers: {
                    "Content-Type": "application/json",
                },
    
            })
    
            //Comprobacion  de los datos
            
            alert("Datos almacenados correctamente")
          
        }
    }

    function CancelarInfo() {
       
        
        if (window.confirm("Esta seguro de borrar los datos? ") === true){
        alert("Se procede a borrar la información");
        document.getElementById("info1").value =""; 
        document.getElementById("info2").value =""; 
        document.getElementById("info3").value =""; 
        

    }
       
        

       
    }




