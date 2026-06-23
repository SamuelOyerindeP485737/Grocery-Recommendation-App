import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    cost: number
) {
    return { name, calories, cost };
}

const rows = [
    createData('Frozen yoghurt', 159, 3.99 ),
    createData('Ice cream sandwich', 237, 4.99),
    createData('Eclair', 262, 7.99),
    createData('Cupcake', 305, 4.99),
    createData('Gingerbread', 356, 2.75),
];

export type table = {
    grocery_name: string,
    amount: string,
    cost: number
}

type tableDataType = {
    tableData: table[]
}
//remember to add <TableCell align="right">Amount</TableCell>
export default function BasicTable({tableData} : tableDataType) {
    return (
        <div className="flex-1 z-0">
            <TableContainer component={Paper} elevation={0}>
                <Table sx={{ minWidth: 250, backgroundColor: "#faf7f7" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Grocery item</TableCell>
                            <TableCell>Amount</TableCell>
                            
                            <TableCell align="right">Cost&nbsp;(£)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow
                                key={row.grocery_name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.grocery_name}
                                </TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell align="right">{row.cost}</TableCell>
                                
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    );
}