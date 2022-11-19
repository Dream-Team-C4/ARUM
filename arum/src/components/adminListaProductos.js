import { Component } from "react";
import '../Styles/table.css';


var heading = [' Id Producto ', ' Nombre Producto ',' Descripcion Producto ', ' Precio Unitario ',' Stock '];

//var body = conexion a un BD NOsq o sql o un arcgivo plano

var body =
    [
    ['PI-0001', 'Arum Fresh', 'Verduras y frutas liofilizadas, espirulina, fibra prebiótica (inulina)','50000','200'],
    ['PI-0002', 'Arum Life', 'Péptidos de Colágeno, Vitaminas y minerales','80000','500'],
    ['PI-0003', 'Arum Vital','Péptidos de Colágeno, alto aporte de magnesio, vitaminas y minerales', '90000','400'],
    ['PI-0004', 'Arum Defense','extractos vegetales bioactivos (plantas adaptógenas), vitaminas, antioxidantes y aminoácidos', '100000','500']
 
    ];


export function ListaProductosAdmin() {

    return (
        <>
         <div id="listaProd">
            <h3>LISTA DE PRODUCTOS</h3>
            <br></br>
            <div >
                <Table heading={heading} body={body} />
            </div>
            </div>
            
            
        </>
    );

}

class Table extends Component {
    render() {

       //Vector y formatearlos para que react los conozca y los trate coomo un map
       //Map Coleecion no lineal

        var heading = this.props.heading;
        var body = this.props.body;
        
        return (
            <div id="datagrid">
                <table >
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>


            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}