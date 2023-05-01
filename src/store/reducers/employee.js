import {
    CREATE_EMPLOYEE_STARTED,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE
} from '../types';

const initialState = {
    list: [
        // {
        //     firstName: 'Fabian',
        //     lastName: 'Deneuville',
        //     birthDate: '1986-08-29',
        //     startDate: '2022-09-05',
        //     street: '3 impasse James Lambert',
        //     city: 'Saint-Piat',
        //     state: 'Virginia',
        //     zipCode: '28130',
        //     department: 'Engeneering'
        // },
        // {
        //     firstName: 'Camille',
        //     lastName: 'Esquirol',
        //     birthDate: '1991-09-17',
        //     startDate: '2022-09-05',
        //     street: '3 impasse James Lambert',
        //     city: 'Saint-Piat',
        //     state: 'Virginia',
        //     zipCode: '28130',
        //     department: 'Sale'
        // }
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