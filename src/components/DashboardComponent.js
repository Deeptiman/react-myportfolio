import React, { Component } from 'react';
import '../index.css';
import profile from '../images/deeptiman.png';
import github from '../images/github.png';
import medium from '../images/medium.png';
import stackoverflow from '../images/stackoverflow.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

import ProjectsComponent from './ProjectsComponent';

export default class DashboardComponent extends Component {


    componentDidMount() {
    }

    render() {
                
        return (

            <div className={'dashboard-header-container'}>
                <div className={'dashboard-banner-container'}></div>
                <img className={'dashboard-banner-background'} />
                
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
                            <a href="https://github.com/deeptiman" target="_blank"><img src={github} className={'social-icon'} /></a>
                            <a href="https://stackoverflow.com/users/1453704/deeptimancode" target="_blank"><img src={stackoverflow} className={'social-icon'} /></a>
                            <a href="https://www.linkedin.com/in/deeptiman123/" target="_blank"><img src={linkedin} className={'social-icon'} /></a>
                            <a href="https://medium.com/@deeptiman" target="_blank"><img src={medium} className={'social-icon'} /></a>
                            <a href="https://twitter.com/deeptimancode" target="_blank"><img src={twitter} className={'social-icon'} /></a>
                    </div>

                    <div className={'profile-description-container'}>
                        <p className={'profile-description'}>
                            I have extensive software development experience in both Mobile & Web application frameworks. Developed various mobile smartphone applications using Android, React-Native cross-platform framework. In Web development, worked on ReactJS as a major front-end JavaScript UI framework and Node.js, Golang as the backend scripting languages to build REST APIs with cloud deployment at Amazon AWS, Google Cloud Platform, and Heroku.
                        </p>
                        <p className={'profile-description'}>
                            I am very much curious to learn and build Blockchain applications and recently developed a few projects using Hyperledger Fabric  Distributed Ledger Technology that demonstrate the working techniques of a Permissioned based Blockchain network. Also, writing blogs at Medium to explain the brief concepts of Hyperledger Fabric.
                        </p>
                    </div>

                    <div className={'project-layout-container'}>
                        <ProjectsComponent />
                    </div>

                </div>
            </div>

        )
    }
}
