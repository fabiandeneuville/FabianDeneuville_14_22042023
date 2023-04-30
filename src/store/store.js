import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/root';
import employeeSaga from './sagas/employee';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(employeeSaga);

export default store;