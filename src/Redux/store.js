import { createStore,combineReducers,applyMiddleware } from 'redux';

import laptopReducer from "./reducers/laptopReducer";
import mobileReducer from './reducers/mobileReducer'
import usersReducer from './reducers/usersReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({laptops:laptopReducer,mobiles:mobileReducer,users:usersReducer});
const store = createStore(rootReducer,applyMiddleware(logger,thunk))

export default store