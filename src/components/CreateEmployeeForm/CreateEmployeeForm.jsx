import DatePicker from "fd-react-datepicker";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createEmployeeStarted } from "../../store/actions";
import * as Yup from 'yup';
import { 
    FormContainer, 
    Form, 
    InputGroup, 
    Input, 
    Label, 
    Fieldset, 
    Button 
} from "./styled";
import { departments, states } from "../../datas/datas";

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


function CreateEmployeeForm(){

    const Dispatch = useDispatch()
    
    const submitForm = (values) => {
        console.log(values);
        const employee = {
            firstName: values.firstName,
            lastName: values.lastName,
            birthDate: values.birthDate,
            startDate: values.startDate,
            address: {
                street: values.street,
                city: values.city,
                state: values.state,
                zipCode: values.zipCode
            },
            department: values.department
        }
        Dispatch(createEmployeeStarted(employee))
    }

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
                state: states[0],
                department: departments[0]
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
                            {errors.state && 
                                <p>ERROR</p>
                            }
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