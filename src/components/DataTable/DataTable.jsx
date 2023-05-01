import PropTypes from 'prop-types';
import { 
    Table, 
    TableHead, 
    TableBody, 
    TableHeadRow, 
    TableRow, 
    TableData, 
    DataTableWrapper 
} from './styled';

function EmployeesTable({data, columns}) {

    return (
        <DataTableWrapper>
            <Table>
                <TableHead>
                    <TableHeadRow>
                        {columns.map((column, index) => {
                            return (
                                <TableData key={index}>
                                    {column}
                                </TableData>
                            )
                        })}
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                {Object.values(item).map((value, index) => {
                                    return (
                                        <TableData key={index + value}>
                                            {value}
                                        </TableData>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </DataTableWrapper>
    )
}

export default EmployeesTable;

EmployeesTable.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};