import PropTypes from 'prop-types';
import { useState } from 'react';
import { 
    Table, 
    TableHead, 
    TableBody, 
    TableHeadRow, 
    TableRow, 
    TableData, 
    DataTableWrapper,
    SearchInputGroup,
    SearchInput,
    SearchLabel
} from './styled';

function EmployeesTable({data, columns}) {

    const [tableData, setTableData] = useState(data);

    const filterResults = (value) => {
        if(!value){
            setTableData(data)
            return;
        }
        const filteredResults = []
        const sortItems = Object.keys(data[0])
        for(let j = 0; j < tableData.length ; j++){
            for(let i = 0; i < sortItems.length; i++){
                if(tableData[j][sortItems[i]].toLowerCase().includes(value.toLowerCase())){
                    filteredResults.push(tableData[j]);
                }
            }
        }
        const filteredResultsSorted = Array.from(new Set(filteredResults.map(obj => JSON.stringify(obj)))).map(str => JSON.parse(str));
        setTableData(filteredResultsSorted);
    };

    return (
        <>
            <SearchInputGroup>
                <SearchLabel htmlFor="search">Search : </SearchLabel>
                <SearchInput name="search" type="text" onInput={(e) => filterResults(e.target.value)}/>
            </SearchInputGroup>
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
                        {tableData.map((item, index) => {
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
        </>
    )
}

export default EmployeesTable;

EmployeesTable.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};