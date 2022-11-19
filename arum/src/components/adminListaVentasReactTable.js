import '../Styles/table.css';
import { useTable } from 'react-table';
import React from 'react';



export function ListaVentasReact() {

 

const data = React.useMemo(
    () => [
      
      {
        idP: 'ARUM-0001',
        nombreP: 'Arum Fresh',
        descP: 'Verduras y frutas liofilizadas, espirulina, fibra prebiótica (inulina)',
        cantidad: 20,
        venta: 1000000
      },
      {
        idP: 'ARUM-0002',
        nombreP: 'Arum Life',
        descP: 'Péptidos de Colágeno, Vitaminas y minerales',
        cantidad: 50,
        venta: 4000000,
        
      },
    ],
    []
  )
    
  const columns = React.useMemo(
    () => [
      {
        Header: 'Id Producto ',
        accessor: 'idP', // accessor is the "key" in the data
        },
        {
        Header: 'Nombre del Producto',
        accessor: 'nombreP', // accessor is the "key" in the data
        },
        {
        Header: 'Descripción del Producto',
        accessor: 'descP', // accessor is the "key" in the data
        },
        {
          Header: 'Cantidad',
          accessor: 'cantidad', // accessor is the "key" in the data
          },
        {
        Header: 'Venta',
        accessor: 'venta', // accessor is the "key" in the data
        },
        

    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    
    <div>

    <table {...getTableProps()} style={{ border: 'solid 1px green' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                id="columna"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    id="fila"
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <br></br>
    <label for="story">Venta Total:</label>
  
      <textarea bac rows="1.4" cols="20" disabled>
           5000000
      </textarea>
    
  </div>
    

    
  )

 
}