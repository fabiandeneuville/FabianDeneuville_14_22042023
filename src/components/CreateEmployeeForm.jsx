import styled from "styled-components";
import DatePicker from "fd-react-datepicker";
import CustomDropDown from "../components/CustomDropDown";
import { Formik } from "formik";
import * as Yup from 'yup';

import { departments, states } from "../datas/datas";

const FormContainer = styled.div`
    width: 300px;
    margin: 20px auto 100px auto;
`;

const Form = styled.form`
    margin: 30px 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 5px;
    font-size: 14px;
`

const Label = styled.label`
    padding: 5px;
    font-size: 12px;
`;

const Fieldset = styled.fieldset`
    margin: 10px 0 10px 0;
`

const Button = styled.button`
    margin: 15px 0 15px 0;
    cursor: pointer;
`;

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required field'),
    lastName: Yup.string().required('Required field'),
    birthDate: Yup.string().required('Required field'),
    startDate: Yup.string().required('Required field'),
    street: Yup.string().required('Required field'),
    city: Yup.string().required('Required field'),
    state: Yup.string().required('Required field'),
    zipCode: Yup.string().required('Required field'),
    department: Yup.string().required('Required field')
});

const submitForm = (values) => {
    console.log(values);
}

function CreateEmployeeForm(){

    return (
        <FormContainer>
            <h2>Create Employee</h2>
            <Formik
            validationSchema={validationSchema}
            initialValues={{
                firstName: '',
                lastName: '',
                birthDate: '',
                startDate: '',
                street: '',
                city: '',
                zipCode: '',
                state: '',
                department: ''

            }}
            onSubmit={(values, errors) => submitForm(values, errors)}
            >
            {({values, errors, handleChange, handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label
                        htmlFor="firstName"
                        >
                            First Name
                        </Label>
                        <Input
                        name={"firstName"}
                        value={values.firstName}
                        onChange={handleChange}
                        style={errors.firstName && {border: '2px solid crimson'}}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label
                        htmlFor="lastName"
                        >
                            Last Name
                        </Label>
                        <Input
                        name={"lastName"}
                        value={values.lastName}
                        onChange={handleChange}
                        style={errors.lastName && {border: '2px solid crimson'}}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label
                        htmlFor="birthDate"
                        >
                            Birth Date
                        </Label>
                        <DatePicker
                        name={"birthDate"}
                        value={values.birthDate}
                        onChange={handleChange}
                        style={errors.birthDate ? {border: '2px solid crimson', fontSize: '14px', padding: '5px'} : {border: '1px solid black', fontSize: '14px', padding: '5px'}}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label
                        htmlFor="startDate"
                        >
                            Start Date
                        </Label>
                        <DatePicker
                        name={"startDate"}
                        value={values.startDate}
                        onChange={handleChange}
                        style={errors.startDate ? {border: '2px solid crimson', fontSize: '14px', padding: '5px'} : {border: '1px solid black', fontSize: '14px', padding: '5px'}}
                        />
                    </InputGroup>
                    <Fieldset name="address">
                        <legend>Address</legend>
                        <InputGroup>
                            <Label
                            htmlFor="street"
                            >
                                Street
                            </Label>
                            <Input
                            name={"street"}
                            value={values.street}
                            onChange={handleChange}
                            style={errors.street && {border: '2px solid crimson'}}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label
                            htmlFor="city"
                            >
                                City
                            </Label>
                            <Input
                            name={"city"}
                            value={values.city}
                            onChange={handleChange}
                            style={errors.city && {border: '2px solid crimson'}}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label
                            htmlFor="state"
                            >
                                State
                            </Label>
                            <CustomDropDown
                            name={'state'}
                            options={states}
                            selected={states[0]}
                            onChange={handleChange}
                        />
                    </InputGroup>
                        <InputGroup>
                            <Label
                            htmlFor="zipCode"
                            >
                                Zip Code
                            </Label>
                            <Input
                            name={"zipCode"}
                            value={values.zipCode}
                            onChange={handleChange}
                            style={errors.zipCode && {border: '2px solid crimson'}}
                            />
                        </InputGroup>
                    </Fieldset>
                    <InputGroup>
                        <Label
                        htmlFor="department"
                        >
                            Department
                        </Label>
                        <CustomDropDown
                        name={'department'}
                        options={departments}
                        selected={departments[0]}
                        onChange={handleChange}
                        />
                    </InputGroup>
                    <Button
                    type="submit"
                    >
                        Save
                    </Button>
                </Form>

            )}


            </Formik>
            
        </FormContainer>
    );
}

export default CreateEmployeeForm;