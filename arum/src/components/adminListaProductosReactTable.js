import '../styles/table.css';
import { useTable } from 'react-table';
import React from 'react';



export function TablaProductos() {

const data = React.useMemo(
    () => [
      
      {
        idP: 'PI-0001',
        nombreP: 'Arum Fresh',
        descP: 'Verduras y frutas liofilizadas, espirulina, fibra prebiótica (inulina)',
        precioP: 50000,
        stockP: 300
      },
      {
        idP: 'PI-0001',
        nombreP: 'Arum Life',
        descP: 'Péptidos de Colágeno, Vitaminas y minerales',
        precioP: 80000,
        stockP: 400
      },
    ],
    []
  )
    
  const columns = React.useMemo(
    () => [
      {
        Header: 'Id Producto',
        accessor: 'idP', // accessor is the "key" in the data
        },
        {
        Header: 'Nombre del Productoo',
        accessor: 'nombreP', // accessor is the "key" in the data
        },
        {
        Header: 'Descripción del Producto',
        accessor: 'descP', // accessor is the "key" in the data
        },
        {
        Header: 'Precio Unitario',
        accessor: 'precioP', // accessor is the "key" in the data
        },
        {
        Header: 'Stock',
        accessor: 'stockP', // accessor is the "key" in the data
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
  )
}