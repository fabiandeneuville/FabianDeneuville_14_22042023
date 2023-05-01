import { Link, useLocation } from "react-router-dom";
import { PageHeader } from "./styled";

function Header(){

    let location = useLocation();

    return (
        <PageHeader>
            <h1>HRnet</h1>
            <Link style={{ color: "black"}} to={ location.pathname === '/' ? '/employees' : '/'}>{location.pathname === '/' ? 'View Current Employees' : 'Create employee'}</Link>
        </PageHeader>
    );
}

export default Header