import '../Styles/table.css';
import { useTable, useRowSelect } from 'react-table';
import React from 'react';



export function ListaProductosClienteReact() {

const data = React.useMemo(
    () => [
      
      {
        idP: 'ARUM-0001',
        nombreP: 'Arum Vital',
        descP: 'Verduras y frutas liofilizadas, espirulina, fibra prebiótica (inulina)',
        precioP: 50000,
        cantidad: 2,
        total: 100000
      },
      {
        idP: 'ARUM-0002',
        nombreP: 'Arum Life',
        descP: 'Péptidos de Colágeno, Vitaminas y minerales',
        precioP: 80000,
        cantidad: 3,
        total: 240000
        
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
        Header: 'Precio Unitario',
        accessor: 'precioP', // accessor is the "key" in the data
        },
        {
        Header: 'Cantidad',
        accessor: 'cantidad', // accessor is the "key" in the data
        },
        {
          Header: 'Total',
          accessor: 'total', // accessor is the "key" in the data
          },

    ],
    []
  )

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} style={{ border: 'solid 1px green' }}>
        <thead >
          {headerGroups.map(headerGroup => (
            <tr id="columna1" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}
                
                </th>
              ))}
              
            </tr>
          ))}
        </thead>
        <tbody  {...getTableBodyProps()}>
          {rows.slice(0, 10).map((row, i) => {
            prepareRow(row)
            return (
              <tr id = "fila1" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <button onClick={agregarCarrito}>Agregar al carrito</button>
      </div>

    
      </>
      

  );
  function agregarCarrito() {
    alert("Productos Agregados");
  }
}
