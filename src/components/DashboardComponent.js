import React, { Component } from 'react';
import '../index.css';
import portfolio from '../images/portfolio.png';
import profile from '../images/deeptiman.png';
import github from '../images/github_text.png';
import medium from '../images/medium_text.png';
import stackoverflow from '../images/stackoverflow_text.png';
import linkedin from '../images/linkedin_text.png';
import twitter from '../images/twitter_text.png';

import skills from '../images/skills.png';
import ProjectsComponent from './ProjectsComponent';
import ContactComponent from './ContactComponent';

export default class DashboardComponent extends Component {


    componentDidMount() {
    }

    render() {
                
        return (

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
                
                <div className={'dashboard-profile-div'}>
                    
                    <div className={'profile-image'}>
                        <img src={profile} className={'profile'} />
                    </div>

                    <div className={'profile-name-container'}>
                        <span className={'profile-name'}>Deeptiman Pattnaik</span>
                    </div>

                    <div className={'profile-designation-container'}>
                        <span className={'profile-designation'}>Senior Software Developer</span>                        
                    </div>
                    
                    <div className={'social-profile-container'}>
                            <a href="https://github.com/deeptiman" target="_blank"><img src={github} className={'github-social-icon'} /></a>
                            <a href="https://stackoverflow.com/users/1453704/deeptimancode" target="_blank"><img src={stackoverflow} className={'stackoverflow-social-icon'} /></a>
                            <a href="https://www.linkedin.com/in/deeptiman123/" target="_blank"><img src={linkedin} className={'linkedin-social-icon'} /></a>
                            <a href="https://medium.com/@deeptiman" target="_blank"><img src={medium} className={'medium-social-icon'} /></a>
                            <a href="https://twitter.com/deeptimancode" target="_blank"><img src={twitter} className={'twitter-social-icon'} /></a>
                    </div>

                    <div className={'profile-description-container'}>
                        <p className={'profile-description'}>
                            I have extensive software development experience in both Mobile & Web application frameworks. Developed various mobile smartphone applications using Android, React-Native cross-platform framework. In Web development, worked on ReactJS as a major front-end JavaScript UI framework and Node.js, Golang as the backend scripting languages to build REST APIs with cloud deployment at Amazon AWS, Google Cloud Platform, and Heroku.
                        </p>
                        <p className={'profile-description'}>
                            I am very much curious to learn and build Blockchain applications and recently developed a few projects using Hyperledger Fabric  Distributed Ledger Technology that demonstrate the working techniques of a Permissioned based Blockchain network. Also, writing blogs at Medium to explain the brief concepts of Hyperledger Fabric.
                        </p>
                    </div>

                    <div id={'projects'} className={'project-layout-container'}>                        
                        <ProjectsComponent />
                    </div>
                    <div id={'technical-skills'} className={'dashboard-skills-container'}>

                        <div className={'tech-skills-container'}>
                            <span className={'tech-skills'}>Technical Skills</span>                        
                        </div>
                        <img src={skills} className={'dashboard-skills-background'} />

                    </div>

                    <div id={'contacts'} className={'contact-container'}>
                        <ContactComponent />
                    </div>

                </div>
            </div>

        )
    }
}
