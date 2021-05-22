import { useEffect } from "react"
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Button } from "@material-ui/core";

const API_KEY = process.env.REACT_APP_api_key;

export default function Item({itemList}){

    function onClick(e) {
        console.log("hi")
    }
    
    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
        },
        {
          field: 'website',
          headerName: 'Website',
          sortable: false,
          width: 160,
          renderCell: (params: rows) => {
            return( 
                <Button
                    variant="contained"
                    color="primary"
                    href="params.getValue("
                >Get Directions</Button>);
          }
        },
        {
            field: 'dir',
            headerName: 'Directions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => {
              return( 
                  <Button
                      variant="contained"
                      color="primary"
                  >Get Directions</Button>);
            }
          },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, website:'https://google.com'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    return(
        <div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5}/>
            </div>
        </div>
    )
}