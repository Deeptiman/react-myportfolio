import React, { Component } from 'react';
import '../index.css';

import banner from '../images/hyperledger_multi_org_banner.png';

import {fetchPortfolioLists} from '../actions';
import { connect } from 'react-redux';

class ProjectsComponent extends Component {


    componentDidMount() {
        this.props.fetchPortfolioLists()
    }

    renderPortfolioDetails = (portfolioItem,index) => {
        console.log("Name -- "+portfolioItem.name)
        return (
            <div className={'project-items-container'}>

                    <div className={'project-thumbnail-item'}>
                        <img src={portfolioItem.banner} className={'banner'} />
                    </div>
                    <div className={'project-details-container'}>

                        <div className={'project-name-container'}>
                            {portfolioItem.name}
                        </div>

                        <div className={'project-description-container'}>
                            {portfolioItem.description}
                        </div>

                    </div>
            </div>
        )
    }

    renderPortfolioLists = (portfolioLists) => {
        if(portfolioLists.length > 0){
            return (
                portfolioLists.map((portfolioItem,index) => {

                    return (
                        <div>{this.renderPortfolioDetails(portfolioItem, index)}</div>
                    )
                })
            )
        }
    }

    render() {
        console.log("Portfolio ->>> "+JSON.stringify(this.props.portfolioLists))

        var portfolioLists = JSON.parse(JSON.stringify(this.props.portfolioLists)).portfolioLists;
        
        console.log("Read Portfolio ::: "+portfolioLists.length+" >>> "+JSON.stringify(portfolioLists));

        return (
            <div>
                  {this.renderPortfolioLists(portfolioLists)}              
            </div>
        )
    }
}

const dispatchProps = dispatch => ({
    fetchPortfolioLists: () => dispatch(fetchPortfolioLists())
})

const stateProps = state => ({
    portfolioLists: state.portfolioLists
})

export default connect(stateProps, dispatchProps)(ProjectsComponent)