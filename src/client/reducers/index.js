import {combineReducers} from 'redux';

import portfolioReducer from './portfolioReducer';

const rootReducer = combineReducers({
    portfolioLists: portfolioReducer,
});

export default rootReducer;