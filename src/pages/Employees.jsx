import Header from "../components/Header/Header";
import EmployeesTable from "../components/DataTable/DataTable";
import { useSelector } from "react-redux";

function Employees(){

    const employees = useSelector(state => state.employee.list);
    const columns = [
        'First Name',
        'Last Name',
        'Birth Date',
        'Start Date',
        'Street',
        'City',
        'State',
        'Zip code',
        'Department'
    ]

    return (
        <>
            <Header/>
            {employees.length ? (
                <EmployeesTable
                data={employees}
                columns={columns}
                />
            ) : (
                <h2 style={{padding: '20px'}}>No employees !</h2>
            )}
        </>
    );
}

export default Employees;