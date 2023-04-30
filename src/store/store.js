import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './reducers/employee';
import employeeSaga from './sagas/employee';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: employeeReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(employeeSaga);

export default store;