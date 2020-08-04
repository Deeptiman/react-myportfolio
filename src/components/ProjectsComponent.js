import React, { Component } from 'react';
import '../index.css';

import parse from 'html-react-parser';

import medium from '../images/medium_logo.png';
import github from '../images/github_logo.png';
import {fetchPortfolioLists} from '../actions';
import { connect } from 'react-redux';

class ProjectsComponent extends Component {


    componentDidMount() {
        this.props.fetchPortfolioLists()
    }

    checkServer = (portfolioItem) => {

        if(portfolioItem.hasGithub === true) {
            return (
                <div className={'project-link-container'}>

                    <div className={'personal-project-container'}>    

                        {portfolioItem.hasMedium === true &&
                            <div className={'medium-blog-container'}>
                                <a href={portfolioItem.medium} target="_blank"><img src={medium} className={'medium'}/></a>
                            </div>                        
                        }

                        <div className={'github-repo-container'}>
                            <a href={portfolioItem.github} target="_blank">
                                <img src={github} className={'github-logo-buttton'} />    
                            </a>
                            <div className={'github-badge-container'}>
                                <img alt="GitHub last commit" src={portfolioItem.github_badges_last_commit} className={'github-badge-icon'}/> 
                                <img alt="GitHub language count" src={portfolioItem.github_badges_language_count} className={'github-badge-icon'}/>
                                <img alt="GitHub top language" src={portfolioItem.github_badges_top_language} className={'github-badge-icon'}/>
                                <img alt="GitHub forks" src={portfolioItem.github_badges_forks} className={'github-badge-icon'}/>
                            </div> 
                        </div>
                    </div>
                </div>
            )
        }

        if(portfolioItem.hasPlaystore === true) {
            return (
                <div className={'project-link-container'}>
                    <a href={portfolioItem.playstore} target="_blank">
                        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className={'playstore-badge-icon'}/>
                    </a>
                </div>
            )
        }
    }

    renderEvenPortfolioDetails = (portfolioItem,index) => {
        console.log("Name -- "+portfolioItem.name)
       
        return (
            <div className={'project-even-items-container'}>                
                    <div className={'project-thumbnail-item'}>
                        <img src={portfolioItem.banner} className={'banner'} />
                    </div>
                    <div className={'project-details-container'}>
                        
                        <div className={'project-description-container'}>
                           <p className={'project-description'}> {parse(portfolioItem.description)} </p>
                        </div>
                        {this.checkServer(portfolioItem)}
                    </div>                
            </div>
        )
    }

    renderOddPortfolioDetails = (portfolioItem,index) => {
        console.log("Name -- "+portfolioItem.name)
        
        return (
            <div className={'project-odd-items-container'}>                
                    <div className={'project-details-container'}>
                         
                        <div className={'project-description-container'}>
                            <p className={'project-description'}> {parse(portfolioItem.description)} </p>
                        </div>
                        
                        {this.checkServer(portfolioItem)}

                    </div>                
                    <div className={'project-odd-thumbnail-item'}>
                        <img src={portfolioItem.banner} className={'banner'} />
                    </div>                   
                   
            </div>
        )
    }

    renderPortfolioLists = (portfolioLists) => {
        if(portfolioLists.length > 0){
            return (
                portfolioLists.map((portfolioItem,index) => {
                    var i = index + 1;

                    if(i%2 == 0){
                        return (                        
                            <div>{this.renderEvenPortfolioDetails(portfolioItem, index)}</div>
                        )
                    } else if(i%2 !=0){
                        return (                        
                            <div>{this.renderOddPortfolioDetails(portfolioItem, index)}</div>
                        )
                    }
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