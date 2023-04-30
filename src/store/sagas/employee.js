import { takeLatest, put } from 'redux-saga/effects';
import {
    CREATE_EMPLOYEE_STARTED
} from '../types';

import { 
    createEmployeeSuccess,
    createEmployeeFailure,
    displayModal
} from '../actions';

function* createEmployee(action){
    const { employee } = action.payload;
    try {
        yield put(createEmployeeSuccess(employee));
        yield put(displayModal("Employee created !"))
    }
    catch(error){
        yield put(createEmployeeFailure(error));
    }
}

export default function* employeeSaga(){
    yield takeLatest(CREATE_EMPLOYEE_STARTED, createEmployee)
}