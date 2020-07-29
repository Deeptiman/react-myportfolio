import {combineReducers} from 'redux';

import portfolioReducer from './portfolioReducer';

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
});

export default rootReducer;