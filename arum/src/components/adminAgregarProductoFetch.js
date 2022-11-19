import { Fragment } from "react";
import { useState } from "react";
import '../Styles/agregarProducto.css';


export function FormularioAgregarProductos(){

    const [data,setData] = useState({
        
        id:"ARUM-",
        nombre : "",
        desc : "",
        precio : "",
        stock : "",
        img : ""
    }
    )

    return(

    <Fragment>

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
            
                <input type="text" class="form" id="info1" required onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, nombre: e.target.value})
                }
                }></input>
           
            <br></br>
            <br></br>
            <label> Descripción </label>
            
                <input type="text" class="form" id="info2" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, desc: e.target.value})
                }
                }></input>
                        
          
            <br></br>
            <br></br>
            <label> Precio </label>
            
                <input type="number" class="form" required id="info3" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, precio: e.target.value})
                }
                }></input>
                    
            
            <br></br>
            <br></br>
            
            <label> Stock </label>
                        
            <input type="number" class="form" required id="info4" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, stock: e.target.value})
                }
                }></input>

                 
            <br></br>

            
            <br></br>
            
            <input type="image" title="Agregar Imagen" alt="Agregar Imagen" id="image"  onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, img: e.target.value})
                }
                }></input>

                 
            <br></br>


            <br></br>
            
              <button onClick={VerInfo}>Validar informacion</button> 
              <br></br> 
              <br></br>   
              <button onClick={CancelarInfo} >Borrar Datos</button>    
                              
        </div>

        </center>

        
    </Fragment>

    );
     function VerInfo() {
        alert("Producto Agregado: " + data.nombreProd);

        /*var emailMongo = "mauricio@gmail.com";
        var ccMongo = 8101673;

        // eslint-disable-next-line 
        if (emailMongo === data.email && ccMongo == data.docIdentidad) {

            alert ("Usuario ingresado correcto")
        } else {
            alert("Por favor verifique los datos")
        }

       

        /*Comparación con datos de BD

        func(data.email, data.docIdentidad){
            datos de mongo
            if email fomr == email Mongo
        }
        */
    }

    function CancelarInfo() {
       
        
        if (window.confirm("Esta seguro de borrar los datos? ") === true){
        alert("Se procede a borrar la información");
        document.getElementById("info1").value =""; 
        document.getElementById("info2").value =""; 
        document.getElementById("info3").value =""; 
        document.getElementById("info4").value =""; 

    }
       
        

       
    }




}