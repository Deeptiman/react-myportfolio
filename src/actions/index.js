import {FETCH_PORTFOLIO} from './constants';


export const fetchPortfolioListsCallback = data => ({
    type: FETCH_PORTFOLIO,
    payload: data,
})


export const fetchPortfolioLists = () => dispatch => {

    var projects = [
        {
            id: 1,
            name: 'Project-1',
            description: 'Test Project',
            banner: require('../images/hyperledger_multi_org_banner.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            link: 'Link 1',
            github: 'Github 1',
            hasPlaystore: false
        },
        {
            id: 2,
            name: 'Project-2',
            description: 'Test Project',
            banner: require('../images/beat_station.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            link: 'Link 2',
            github: 'Github 2',
            hasPlaystore: false
        },
        {
            id: 3,
            name: 'Project-3',
            description: 'Test Project',
            banner: require('../images/parser_tool.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            link: 'Link 3',
            github: 'Github 3',
            hasPlaystore: false
        }
    ]

    dispatch(fetchPortfolioListsCallback(projects))
};