import {
    CREATE_EMPLOYEE_STARTED,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE
} from './types';

export const createEmployeeStarted = (employee) => {
    return {
        type: CREATE_EMPLOYEE_STARTED,
        payload: {
            employee
        }
    };
};

export const createEmployeeSuccess = (employee, displayModal) => {
    return {
        type: CREATE_EMPLOYEE_SUCCESS,
        payload: {
            employee,
            displayModal
        }
    };
};

export const createEmployeeFailure = (error) => {
    return {
        type: CREATE_EMPLOYEE_FAILURE,
        payload: {
            error
        }
    };
};