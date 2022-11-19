import { Component } from "react";
import '../Styles/table.css';

var heading = ['Id Producto', 'Nombre Producto', 'Descripcion Producto', 'Precio Unitario'];

//var body = conexion a un BD NOsq o sql o un arcgivo plano

var body =
    [
        ['ARUM-0001', 'Arum Fresh', 'Verduras y frutas liofilizadas, espirulina, fibra prebiótica (inulina)','50000'],
       
    ];


export function CarritoCompras() {

    return (
        <>
            <div id='TablaCarrito'>
                <div >
                    <Table heading={heading} body={body} />
                </div>
                <h4>Total de la venta: 500000</h4>
                <button>Confirmar Compra</button>
                <br></br>
                <br></br>
                <button>Cancelar Compra</button>
                
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
                <table>
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