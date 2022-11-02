 //Componente sencillo
 //integra css

 import '../Styles/header.css';
 import imagen from '../images/logo.png';
 
 export function SeccionHeader() {

    return(
        <>
    <div id= "divheader">
    <right><img src={imagen} className="Arum Logo" alt="logo" height={150}  /></right> 
    <h1>TIENDA VIRTUAL </h1>
          
    </div>
       
    
    </>

    );
}