import {
    CREATE_EMPLOYEE_STARTED,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE
} from '../types';

const initialState = {
    employees: [],
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
                employees: [...state.employees, action.payload.employee],
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