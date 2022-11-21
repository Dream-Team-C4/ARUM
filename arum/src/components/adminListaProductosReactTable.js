import '../Styles/table.css';
import { useTable } from 'react-table';
import React from 'react';
import dfs from '../resources/ARUM DFS PNG.png';
import fresh from '../resources/ARUM FRESH PNG.png';
import life from '../resources/ARUM LIFE PNG.png';
import vital from '../resources/ARUM VITAL PNG.png';
import { MenuAdmin } from "../components/navMenuAdmin.js";
import { SeccionHeader } from "../components/seccionHeader";


export function TablaProductos() {

  


const data = React.useMemo(
    () => [
      
      {
        idP: 'ARUM-0001',
        nombreP: 'Arum Fresh',
        descP: 'Verduras y frutas liofilizadas, espirulina, fibra prebiótica (inulina)',
        precioP: 50000,
        stockP: 300,
        imagen: <img class="fit-picture"
        src={fresh}
        alt="fresh"></img>
      },
      {
        idP: 'ARUM-0002',
        nombreP: 'Arum Life',
        descP: 'Péptidos de Colágeno, Vitaminas y minerales',
        precioP: 80000,
        stockP: 200,
        imagen: <img class="fit-picture"
        src={life}
        alt="life"></img>
      },
      {
        idP: 'ARUM-0003',
        nombreP: 'Arum Vital',
        descP: 'Péptidos de Colágeno, alto aporte de magnesio, vitaminas y minerales',
        precioP: 90000,
        stockP: 500,
        imagen: <img class="fit-picture"
        src={vital}
        alt="vital"></img>
      },
      {
        idP: 'ARUM-0004',
        nombreP: 'Arum Defense',
        descP: 'extractos vegetales bioactivos (plantas adaptógenas), vitaminas, antioxidantes y aminoácidos',
        precioP: 100000,
        stockP: 100,
        imagen: <img class="fit-picture"
        src={dfs}
        alt="defense"></img>
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
        Header: 'Precio (COP)',
        accessor: 'precioP', // accessor is the "key" in the data
        },
        {
        Header: 'Stock',
        accessor: 'stockP', // accessor is the "key" in the data
        },
        {
          Header: 'Imagen Producto',
          accessor: 'imagen', // accessor is the "key" in the data
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
    <>
    <div><SeccionHeader/></div>
    <div><MenuAdmin/></div>
    <div className="container mt-5" align="center">
      
      
    <table {...getTableProps()} style={{ border: 'solid 1px green', width:'1500px'  }}>
      
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
  </div>

  </>
  )
}