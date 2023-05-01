import styled from "styled-components";

export const DataTableWrapper = styled.div`
    width: 100%;
    margin: 25px auto 0 auto;
    padding: 15px;
    overflow-x: scroll
`;

export const Table = styled.table`
    width: 900px;
    margin: 0 auto;
`;

export const TableHead = styled.thead`
    font-weight: bold;
`;

export const TableBody = styled.tbody`

`;

export const TableHeadRow = styled.tr`
    border-bottom: 1px solid black;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

export const TableRow = styled.tr`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 5px 0;
    display: flex;
    align-items: center;
    :nth-child(even) {
        background-color: #f2f2f2;
    }
    :nth-child(odd){
        background-color: white;
    }
    :hover {
        background-color: lightgray;
    }
`;

export const TableData = styled.td`
    font-size: 12px;
    width: 100px;
    text-align: center;
`;