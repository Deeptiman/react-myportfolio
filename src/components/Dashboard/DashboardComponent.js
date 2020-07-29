import React, { Component } from 'react';
import '../../index.css';
import profile from '../../images/deeptiman.png';

export default class DashboardComponent extends Component {

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

                    <div className={'profile-description-container'}>
                        <p className={'profile-description'}>
                        I'm a Senior Software Engineer specialized in Android & Web application development, having fluent knowledge in the Android framework and developed many mobile applications from various domains such as (Payment, IoT, Graphics, Augmented Reality & Virtual Reality) and also developed cross-platform based mobile application using React-Native framework. In terms of the Web framework having experience in both back-end and front-end development, developed many full-stack based web application using Node.js, React.js & MongoDB.
                        </p>
                      
                    </div>

                </div>
            </div>

        )
    }
}