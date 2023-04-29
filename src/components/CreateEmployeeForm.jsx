import styled from "styled-components";
import DatePicker from "fd-react-datepicker";

const FormContainer = styled.div`
    width: 300px;
    margin: 20px auto 0 auto;
`;

const Form = styled.form`
    margin: 30px 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 5px;
`

const Label = styled.label`
    padding: 5px;
    font-size: 12px;
`;

function CreateEmployeeForm(){

    return (
        <FormContainer>
            <h2>Create Employee</h2>
            
        </FormContainer>
    );
}

export default CreateEmployeeForm;