import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    height: 100px;
    padding: 10px;
    border-bottom: 1px solid #333;
`;

function Header(){

    let location = useLocation();

    return (
        <PageHeader>
            <h1>HRnet</h1>
            <Link to={ location.pathname === '/' ? '/employees' : '/'}>{location.pathname === '/' ? 'View Current Employee' : 'Create employee'}</Link>
        </PageHeader>
    );
}

export default Header