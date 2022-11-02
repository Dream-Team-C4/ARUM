import { Fragment } from "react";
import { useState } from "react";
import '../Styles/agregarProducto.css';


export function FormularioAgregarProductos(){

    const [data,setData] = useState({
        nombreProd : "",
        descripcion : "",
        precio : 0,
        stock : 0
    }
    )

    return(

    <Fragment>

        <center>
        <h2> ADMINISTRADOR</h2>
        <h3>Agregar Producto</h3>
        <div id="divAdd">
            
            <label> Nombre del Producto </label>
            <br></br>
                <input type="text" class="form-control" id="info1" required spaonChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, nombreProd: e.target.value})
                }
                }></input>
           
            <br></br>
            <label> Descripción </label>
            <br></br>
                <input type="text" class="form-control" id="info2" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, descripción: e.target.value})
                }
                }></input>
                        
          
            <br></br>
            
            <label> Precio </label>
            <br></br>
                <input type="number" class="form-control" required id="info3" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, precio: e.target.value})
                }
                }></input>
                    
            
            <br></br>
            
            <label> Stock </label>
            <br></br>
            
            <input type="number" class="form-control" required id="info4" onChange={(e)=>{
                    //console.log(e.target.value);
                    setData({...data, stock: e.target.value})
                }
                }></input>
            
            
            <br></br>
            
              <button onClick={VerInfo}>Validar informacion</button> 
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