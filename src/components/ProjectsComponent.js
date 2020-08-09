import React, { Component } from 'react';
import '../index.css';

import parse from 'html-react-parser';

import medium from '../images/medium_logo.png';
import github from '../images/github_logo.png';
import { fetchPortfolioLists } from '../actions';
import { connect } from 'react-redux';

class ProjectsComponent extends Component {


    componentDidMount() {
        this.props.fetchPortfolioLists()
    }

    checkServer = (portfolioItem) => {

        if (portfolioItem.hasGithub === true) {
            return (
                <div className={'project-link-container'}>

                    <div className={'personal-project-container'}>

                        {portfolioItem.hasMedium === true &&
                            <div className={'medium-blog-container'}>
                                <a href={portfolioItem.medium} target="_blank"><img src={medium} className={'medium'} /></a>
                            </div>
                        }

                        <div className={'github-repo-container'} style={portfolioItem.hasMedium === true ? ({ marginLeft: '1em' }) : ({})}>
                            <a href={portfolioItem.github} target="_blank">
                                <img src={github} className={'github-logo-buttton'} />
                            </a>
                            <div className={'github-badge-container'}>
                                <img alt="GitHub last commit" src={portfolioItem.github_badges_last_commit} className={'github-badge-icon'} />
                                <img alt="GitHub language count" src={portfolioItem.github_badges_language_count} className={'github-badge-icon'} />
                                <img alt="GitHub top language" src={portfolioItem.github_badges_top_language} className={'github-badge-icon'} />
                                <img alt="GitHub forks" src={portfolioItem.github_badges_forks} className={'github-badge-icon'} />
                            </div>
                        </div>

                    </div>
                    <div className={'mobile-github-badge-container'} style={portfolioItem.hasMedium === false ? ({ marginTop: '1.5em' }) : ({})}>
                        <img alt="GitHub language count" src={portfolioItem.github_badges_language_count} className={'mobile-github-badge-icon'} />
                        <img alt="GitHub top language" src={portfolioItem.github_badges_top_language} className={'mobile-github-badge-icon'} />
                        <img alt="GitHub forks" src={portfolioItem.github_badges_forks} className={'mobile-github-badge-icon'} />
                    </div>
                </div>
            )
        }

        if (portfolioItem.hasPlaystore === true) {
            return (
                <div className={'project-link-container'}>
                    <a href={portfolioItem.playstore} target="_blank">
                        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className={'playstore-badge-icon'} />
                    </a>
                </div>
            )
        }
    }

    projectTools = (tools) => {
        console.log("Reading Tools --> " + tools.length)
        if (tools.length > 0) {
            return (
                tools.map((tool, index) =>
                    <a href={tool.link} style={{ textDecoration: 'none' }} target="_blank">
                        <div className={'project-tools-item'} style={index != 0 ? ({ marginLeft: '1em' }) : ({})}>
                            <span className={'project-tools'}>{tool.name}</span>
                        </div>
                    </a>
                )
            )
        }
    }

    projectToolsMobileView = (tools) => {
        console.log("Reading Tools --> " + tools.length)
        if (tools.length > 0) {
            return (
                tools.map((tool, index) =>
                    <a href={tool.link} style={{ textDecoration: 'none' }} target="_blank">
                        <div className={'mobile-project-tools-item'} style={{ marginLeft: '0.5em' }}>
                            <span className={'mobile-project-tools'}>{tool.name}</span>
                        </div>
                    </a>
                )
            )
        }
    }


    renderEvenPortfolioDetails = (portfolioItem, index) => {
        console.log("Name -- " + portfolioItem.name)
        console.log("Tools --> ||| " + portfolioItem.tools.length)

        /*if(portfolioItem.tools.length > 0) {
            portfolioItem.tools.map((tool, index) => {
                console.log("ToolName :: "+tool.name)
            })
        }*/

        return (
            <div className={'project-even-items-container'}>
                <div className={'project-thumbnail-item'}>
                    <img src={portfolioItem.banner} className={'banner'} />
                </div>
                <div className={'project-details-container'}>

                    <div className={'project-description-container'}>
                        <p className={'project-description'}> {parse(portfolioItem.description)} </p>
                    </div>
                    <div className={'project-even-tools-container'}>
                        {this.projectTools(portfolioItem.tools)}
                    </div>
                    {this.checkServer(portfolioItem)}
                </div>
            </div>
        )
    }

    renderOddPortfolioDetails = (portfolioItem, index) => {
        console.log("Name -- " + portfolioItem.name)
        console.log("Tools --> ::: " + portfolioItem.tools.length)

        /*if(portfolioItem.tools.length > 0) {
            portfolioItem.tools.map((tool, index) => {
                console.log("ToolName :: "+tool.name)
            })
        }*/

        return (
            <div className={'project-odd-items-container'}>
                <div className={'project-details-container'}>

                    <div className={'project-description-container'}>
                        <p className={'project-description'}> {parse(portfolioItem.description)} </p>
                    </div>
                    <div className={'project-odd-tools-container'}>
                        {this.projectTools(portfolioItem.tools)}
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
        if (portfolioLists.length > 0) {
            return (
                portfolioLists.map((portfolioItem, index) => {
                    var i = index + 1;

                    if (i % 2 == 0) {
                        return (
                            <div className={'projects-list'}>{this.renderEvenPortfolioDetails(portfolioItem, index)}</div>
                        )
                    } else if (i % 2 != 0) {
                        return (
                            <div className={'projects-list'}>{this.renderOddPortfolioDetails(portfolioItem, index)}</div>
                        )
                    }
                })
            )
        }
    }

    renderPortfolioMobileView = (portfolioLists) => {
        if (portfolioLists.length > 0) {
            return (
                portfolioLists.map((portfolioItem, index) => {
                    return (
                        <div className={'mobile-project-items-container'}>
                            <div className={'mobile-project-details-container'}>
                                <div className={'mobile-project-thumbnail-item'}>
                                    <img src={portfolioItem.banner} className={'mobile-banner'} />
                                </div>
                                <div className={'mobile-project-description-container'}>
                                    <p className={'mobile-project-description'}> {parse(portfolioItem.description)} </p>
                                </div>
                                <div className={'mobile-project-tools-container'}>
                                    {this.projectToolsMobileView(portfolioItem.tools)}
                                </div>
                                {this.checkServer(portfolioItem)}
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        //console.log("Portfolio ->>> "+JSON.stringify(this.props.portfolioLists))

        var portfolioLists = JSON.parse(JSON.stringify(this.props.portfolioLists)).portfolioLists;

        //console.log("Read Portfolio ::: "+portfolioLists.length+" >>> "+JSON.stringify(portfolioLists));

        return (
            <div className={'project-list-container'}>

                <div className={'project-label-container'}>
                    <span className={'project-label'}>Projects</span>
                </div>

                {this.renderPortfolioLists(portfolioLists)}
                {this.renderPortfolioMobileView(portfolioLists)}
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