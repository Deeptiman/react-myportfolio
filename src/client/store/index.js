import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const middle = applyMiddleware(thunk, logger);
const store = createStore(reducers, middle);

export default store;