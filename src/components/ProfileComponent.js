import React, { Component } from 'react';
import '../index.css';

import profile from '../images/deeptiman.png';

import desktop_github from '../images/github_text.png';
import desktop_medium from '../images/medium_text.png';
import desktop_stackoverflow from '../images/stackoverflow_text.png';
import desktop_linkedin from '../images/linkedin_text.png';
import desktop_twitter from '../images/twitter_text.png';

import mobile_github from '../images/github.png';
import mobile_medium from '../images/medium.png';
import mobile_stackoverflow from '../images/stackoverflow.png';
import mobile_linkedin from '../images/linkedin.png';
import mobile_twitter from '../images/twitter.png';

export default class ProfileComponent extends Component {

    render() {
        return (
            <div className={'dashboard-profile-container'}>

                <div className={'dashboard-profile-details-container'}>
                    <div className={'profile-image'}>
                        <img src={profile} className={'profile'} />
                    </div>

                    <div className={'profile-name-container'}>
                        <span className={'profile-name'}>Deeptiman Pattnaik</span>
                    </div>

                    <div className={'profile-designation-container'}>
                        <span className={'profile-designation'}>Senior Software Developer</span>
                    </div>

                    <div className={'desktop-social-profile-container'}>
                        <a href="https://github.com/deeptiman" target="_blank"><img src={desktop_github} className={'desktop-github-social-icon'} /></a>
                        <a href="https://stackoverflow.com/users/1453704/deeptimancode" target="_blank"><img src={desktop_stackoverflow} className={'desktop-stackoverflow-social-icon'} /></a>
                        <a href="https://www.linkedin.com/in/deeptiman123/" target="_blank"><img src={desktop_linkedin} className={'desktop-linkedin-social-icon'} /></a>
                        <a href="https://medium.com/@deeptiman" target="_blank"><img src={desktop_medium} className={'desktop-medium-social-icon'} /></a>
                        <a href="https://twitter.com/deeptimancode" target="_blank"><img src={desktop_twitter} className={'desktop-twitter-social-icon'} /></a>
                    </div>

                    <div className={'mobile-social-profile-container'}>
                        <a href="https://github.com/deeptiman" target="_blank"><img src={mobile_github} className={'mobile-github-social-icon'} /></a>
                        <a href="https://stackoverflow.com/users/1453704/deeptimancode" target="_blank"><img src={mobile_stackoverflow} className={'mobile-stackoverflow-social-icon'} /></a>
                        <a href="https://www.linkedin.com/in/deeptiman123/" target="_blank"><img src={mobile_linkedin} className={'mobile-linkedin-social-icon'} /></a>
                        <a href="https://medium.com/@deeptiman" target="_blank"><img src={mobile_medium} className={'mobile-medium-social-icon'} /></a>
                        <a href="https://twitter.com/deeptimancode" target="_blank"><img src={mobile_twitter} className={'mobile-twitter-social-icon'} /></a>
                    </div>

                    <div className={'profile-description-container'}>
                        <p className={'profile-description'}>
                            I have extensive software development experience in both Mobile & Web application frameworks. Developed various mobile smartphone applications using Android, React-Native cross-platform framework. In Web development, worked on ReactJS as a major front-end JavaScript UI framework and Node.js, Golang as the backend scripting languages to build REST APIs with cloud deployment at Amazon AWS, Google Cloud Platform, and Heroku.
                                    </p>
                        <p className={'profile-description'}>
                            I am very much curious to learn and build Blockchain applications and recently developed a few projects using Hyperledger Fabric  Distributed Ledger Technology that demonstrate the working techniques of a Permissioned based Blockchain network. Also, writing blogs at Medium to explain the brief concepts of Hyperledger Fabric.
                                    </p>
                    </div>
                </div>
            </div>
        )
    }
}