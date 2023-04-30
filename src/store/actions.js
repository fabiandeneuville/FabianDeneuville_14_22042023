import {
    CREATE_EMPLOYEE_STARTED,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE,
    DISPLAY_MODAL,
    HIDE_MODAL
} from './types';

export const createEmployeeStarted = (employee) => {
    return {
        type: CREATE_EMPLOYEE_STARTED,
        payload: {
            employee
        }
    };
};

export const createEmployeeSuccess = (employee) => {
    return {
        type: CREATE_EMPLOYEE_SUCCESS,
        payload: {
            employee,
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

export const displayModal = (text) => {
    return {
        type: DISPLAY_MODAL,
        payload: {
            text
        }
    };
};

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    };
};