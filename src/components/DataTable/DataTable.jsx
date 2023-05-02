import PropTypes from 'prop-types';
import { useState } from 'react';
import { 
    Table, 
    TableHead, 
    TableBody, 
    TableHeadData,
    TableHeadRow, 
    TableRow, 
    TableData, 
    DataTableWrapper,
    SearchInputGroup,
    SearchInput,
    SearchLabel,
    CaretUp,
    CaretDown
} from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCaretUp, 
    faCaretDown 
} from '@fortawesome/free-solid-svg-icons';

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

    const sortResults = (index, mode) => {
        const tableDataToSort = [...tableData]
        const sortItems = Object.keys(data[0]);
        const sortBy = sortItems[index];
        const operator = mode === 'ascending' ? 1 : - 1;
        tableDataToSort.sort((a, b) => {
            const _a = a[sortBy].toLowerCase();
            const _b = b[sortBy].toLowerCase();
            if(_a <_b){
                return -1 * operator;
            }
            if(_a > _b){
                return 1 * operator;
            }
            return 0;
        })
        setTableData(tableDataToSort);
    }

    return (
        <>
            <SearchInputGroup>
                <SearchLabel htmlFor="search">Search : </SearchLabel>
                <SearchInput id="search" name="search" type="text" onInput={(e) => filterResults(e.target.value)}/>
            </SearchInputGroup>
            <DataTableWrapper>
                <Table>
                    <TableHead>
                        <TableHeadRow>
                            {columns.map((column, index) => {
                                return (
                                    <TableHeadData key={index}>
                                        {column}
                                        <CaretUp><FontAwesomeIcon icon={faCaretUp} onClick={() => sortResults(index, 'ascending')}></FontAwesomeIcon></CaretUp>
                                        <CaretDown><FontAwesomeIcon icon={faCaretDown} onClick={() => sortResults(index, 'descending')}></FontAwesomeIcon></CaretDown>
                                    </TableHeadData>
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