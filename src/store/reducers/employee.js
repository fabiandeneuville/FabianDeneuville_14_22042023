import {
    CREATE_EMPLOYEE_STARTED,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE
} from '../types';

const initialState = {
    list: [
        {
            firstName: 'John',
            lastName: 'Smith',
            birthDate: '1986-08-29',
            startDate: '2022-09-05',
            street: '128 Ena Place Suite 647',
            city: 'Port John',
            state: 'Vermont',
            zipCode: '38382',
            department: 'Marketing'
        },
        {
            firstName: 'Jack',
            lastName: 'Daniels',
            birthDate: '1977-09-17',
            startDate: '2002-10-12',
            street: '6652 Kshlerin View',
            city: 'Port Lucindastad',
            state: 'California',
            zipCode: '34296',
            department: 'Sales'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            birthDate: '1999-02-09',
            startDate: '2003-01-05',
            street: '4322 Angeline Loop',
            city: 'East Rudolphfurt',
            state: 'Arkansas',
            zipCode: '60153',
            department: 'Legal'
        },
    ],
    error: null,
};

function employee(state = initialState, action){
    switch(action.type){
        case CREATE_EMPLOYEE_STARTED : 
            return {
                ...state
            }
        case CREATE_EMPLOYEE_SUCCESS : 
            return {
                ...state,
                list: [...state.list, action.payload.employee],
                error: null
            }
        case CREATE_EMPLOYEE_FAILURE :
            return {
                ...state,
                error: action.payload.erre
            }
        default :
            return {
                ...state
            }
    }
}

export default employee;