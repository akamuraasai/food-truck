import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import crudReducer from './base/pages/CRUD.reducer';
import loginReducer from './base/pages/Login.reducer';

const rootReducer = combineReducers({
    form: form,
    crudReducer,
    loginReducer
});

export default rootReducer;
