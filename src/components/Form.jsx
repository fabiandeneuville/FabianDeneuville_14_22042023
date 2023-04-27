import styled from "styled-components";
import DatePicker from "fd-react-datepicker";

const FormContainer = styled.div`
    width: 300px;
    margin: 20px auto 0 auto;
`

function Form(){
    return (
        <FormContainer>
            <DatePicker
            label={'Date of Birth'}
            required={true}
            onChange={(value) => console.log(value)}
            />
        </FormContainer>
    );
}

export default Form;