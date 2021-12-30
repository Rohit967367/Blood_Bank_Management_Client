import React from 'react'
import { DataGrid } from '@mui/x-data-grid'


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Blood name', width: 150 },
    { field: 'specility', headerName: 'Specility', width: 150 },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 150,
    // },
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

let BloodList = [
    {
        des:'helo',
        id: '1',
        name: 'A+',
        specility: 'The A-Lister'
    },
    {
        id: '2',
        des:'helo',
        name: 'A-',
        specility: 'The Comforter',
    },
    {
        des:'helo',
        id: '3',
        name: 'B+',
        specility: 'The Bright Ones',
    },
    {
        des:'helo',
        id: '4',
        name: 'B-',
        specility: `The Bee's Knees`,
    },
    {
        id: '5',
        des:'helo',
        name: 'AB+',
        specility: `The Lucky Ones`,
    },
    {
        id: '6',
        name: 'AB-',
        des:'helo',
        specility: `The Rare One`,
    },
    {
        id: '7',
        name: 'O+',
        specility: `The Secret Saver`,
        des:'helo',
    },
    {
        id: '8',
        name: 'O-',
        specility: 'The Ulimite Giver',
        des:'helo',
    }
]



const Registertable = () => {
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={BloodList}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Registertable
