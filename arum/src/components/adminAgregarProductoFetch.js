import { Fragment } from "react";
import { useState } from "react";
import '../Styles/agregarProducto.css';
import { MenuAdmin } from "../components/navMenuAdmin.js";
import { SeccionHeader } from "../components/seccionHeader";


export function AgregarProductos(){

    const [data,setData] = useState({
        
        id:"ARUM-",
        nombre : "",
        desc : "",
        precio : "",
        stock : "",
        img : "https://i0.wp.com/gbq.com.co/wp-content/uploads/2021/06/ARUM-FRESH-CAJA-X-21-SOBRES.jpg?fit=503%2C504&ssl=1"
    }
    )

    return(

    <Fragment>

    <div className="container mt-5" align="center">
    <SeccionHeader/>
        <div><MenuAdmin/></div>
        <center>
        
        <div id="divAdd">
        
            <label > ID del Producto </label>
            
                <input type="number" class="form" id="info1" required onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, id: e.target.value})
                }
                }></input>
           
            <br></br>
            <br></br>

            <label > Nombre del Producto </label>
            
                <input type="text" class="form" id="info2" required onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, nombre: e.target.value})
                }
                }></input>
           
            <br></br>
            <br></br>
            <label> Descripción </label>
            
                <input type="text" class="form" id="info3" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, desc: e.target.value})
                }
                }></input>
                        
          
            <br></br>
            <br></br>
            <label> Precio </label>
            
                <input type="number" class="form" required id="info4" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, precio: e.target.value})
                }
                }></input>
                    
            
            <br></br>
            <br></br>
            
            <label> Stock </label>
                        
            <input type="number" class="form" required id="info5" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, stock: e.target.value})
                }
                }></input>

                 
            <br></br>

            
            <br></br>
            
            <input type="file" title="Agregar Imagen" alt="Agregar Imagen" id="image"  onChange={(e)=>{
                    console.log(e.target.value);
                    setData({...data, img: e.target.value})
                }
                }></input>

                 
            <br></br>


            <br></br>
            
              <button onClick={CrearProducto}>Agregar</button> 
              <br></br> 
              <br></br>   
              <button onClick={CancelarInfo} >Borrar Datos</button>    
                              
        </div>

        </center>

        </div>
    </Fragment>


    );
     function CrearProducto() {
       
        
            const datosJSON = JSON.stringify(data)       
            
    
            fetch("http://localhost:5000/Productos/Agregar", {
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
        document.getElementById("info4").value =""; 
        document.getElementById("info5").value =""; 
        document.getElementById("image").value =""; 

    }
       
        

       
    }




