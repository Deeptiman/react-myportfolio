import { FETCH_PORTFOLIO } from '../actions/constants';

const initialState = {
    portfolioLists: '',
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO: {
            const newState = {
                ...state,
                portfolioLists: action.payload,
            };
            return newState;
        }
        default:
            return state;
    }
};

export default portfolioReducer;