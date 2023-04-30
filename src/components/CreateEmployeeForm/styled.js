import styled from "styled-components";

export const FormContainer = styled.div`
    width: 300px;
    margin: 20px auto 100px auto;
`;

export const Form = styled.form`
    margin: 30px 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 5px;
    font-size: 14px;
`

export const Label = styled.label`
    padding: 5px;
    font-size: 12px;
`;

export const Fieldset = styled.fieldset`
padding: 5px;
    margin: 10px 0 10px 0;
`

export const Button = styled.button`
    margin: 15px 0 15px 0;
    cursor: pointer;
`;