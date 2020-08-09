import React, { Component } from 'react';
import '../index.css';
import portfolio from '../images/portfolio.png';

import ProfileComponent from './ProfileComponent';
import ProjectsComponent from './ProjectsComponent';
import TechnicalSkillsComponent from './TechnicalSkillsComponent';
import ContactComponent from './ContactComponent';

export default class DashboardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            portfolioTabs: ['Profile', 'Projects', 'Technical Skills'],
            tabSelected: 'Profile'
        }
    }

    showPortfolioTabView = () => {
        var tabItem = this.state.tabSelected;

        if(tabItem === 'Profile') {
            return (
                <ProfileComponent />
            )
        }

        if(tabItem === 'Projects') {
            return (
                <ProjectsComponent />
            )
        }

        if(tabItem === 'Technical Skills') {
            return (
                <TechnicalSkillsComponent />
            )
        }
       
    }

    setSelectedPortfolioTab = (tabItem) => {
        this.setState({
            tabSelected: tabItem
        })
    }

    render() {

        return (

            <div className={'dashboard-parent-container'}>

                <div className={'mobile-parent-container'}>

                    <div className={'mobile-header-container'}>
                        <img src={portfolio} className={'mobile-portfolio-logo'} />
                    </div>

                    <div className={'mobile-body-container'}>
                        {this.showPortfolioTabView()}
                    </div>

                    <div className={'mobile-footer-container'}>
                        {this.state.portfolioTabs.map(tabItem =>
                            <div key={tabItem} className={this.state.tabSelected === tabItem ? 'tab-menu-item-selected-container' : 'tab-menu-item-container'} onClick={this.setSelectedPortfolioTab.bind(this, tabItem)}>
                                <span className={this.state.tabSelected === tabItem ? 'tab-menu-item-selected-txt' : 'tab-menu-label-text'}>{tabItem}</span>
                            </div>
                        )}
                    </div>

                </div>

                <div className={'desktop-parent-container'}>

                    <div className={'dashboard-header-container'}>

                        <div className={'menu-bar-container'}>
                            <div className={'menu-portfolio-logo-container'}>
                                <img src={portfolio} className={'portfolio-logo'} />
                            </div>
                            <div className={'menu-label-item-container'}>
                                <a href="#" className={'menu-label-text'}><span>Profile</span></a>
                                <a href="#projects" className={'menu-label-text'}><span>Projects</span></a>
                                <a href="#technical-skills" className={'menu-label-text'}><span>Technical Skills</span></a>
                                <a href="#contacts" className={'menu-label-text'}><span>Contacts</span></a>
                            </div>
                        </div>
                    </div>

                    <div className={'desktop-dashboard-profile-div'}>

                        <ProfileComponent />

                        <div id={'projects'} className={'project-layout-container'}>
                            <ProjectsComponent />
                        </div>

                        <div id={'technical-skills'} className={'dashboard-skills-container'}>
                            <TechnicalSkillsComponent />
                        </div>

                        <div id={'contacts'} className={'contact-container'}>
                            <ContactComponent />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
