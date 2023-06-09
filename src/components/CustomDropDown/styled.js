import styled from "styled-components";

export const DropDownSelect = styled.div`
    border: 1px solid #333;
    cursor: pointer;
    focusable: true
`;

export const Selected = styled.div`
    padding: 5px;
`;

export const DropDownSelectList = styled.div`
    position: absolute;
    background: white;
    width: 100%;
    overflow-y: scroll;
    max-height: 200px;
    max-width: 250px;
    border: 1px solid black;
`;

export const Option = styled.div`
    padding: 5px;
    cursor: pointer;
    :hover {
        background-color: #F2F2F2
    }
`;