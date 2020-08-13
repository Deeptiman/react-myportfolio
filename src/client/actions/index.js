import { FETCH_PORTFOLIO, BASE_URL } from './constants';


export const fetchPortfolioListsCallback = data => ({
    type: FETCH_PORTFOLIO,
    payload: data,
})

export const fetchPortfolioLists = () => dispatch => {

    fetch(BASE_URL+"/api/projects")
        .then(response => response.json())
        .then(res => {            
            dispatch(fetchPortfolioListsCallback(res))
        }).catch(err => {
        })    
};