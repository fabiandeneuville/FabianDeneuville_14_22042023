import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 10px;
`;

function Header(){
    return (
        <PageHeader>
            <h1>HRnet</h1>
            <Link to={'/employees'}>View Current Eployees</Link>
        </PageHeader>
    );
}

export default Header