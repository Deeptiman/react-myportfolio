import React, { Component } from 'react';
import '../index.css';

import github from '../images/github.png';
import medium from '../images/medium.png';
import stackoverflow from '../images/stackoverflow.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

export default class ContactComponent extends Component {

    render() {

        return (
            <div className={'contact-item-container'}>
                <div className={'contact-label-container'}>
                    <span className={'contact-label'}>Contacts</span>
                </div>
                <div className={'social-profile-container'}>
                    <a href="https://github.com/deeptiman" target="_blank"><img src={github} className={'contact-github-social-icon'} /></a>
                    <a href="https://stackoverflow.com/users/1453704/deeptimancode" target="_blank"><img src={stackoverflow} className={'contact-social-icon'} /></a>
                    <a href="https://www.linkedin.com/in/deeptiman123/" target="_blank"><img src={linkedin} className={'contact-social-icon'} /></a>
                    <a href="https://medium.com/@deeptiman" target="_blank"><img src={medium} className={'contact-medium-social-icon'} /></a>
                    <a href="https://twitter.com/deeptimancode" target="_blank"><img src={twitter} className={'contact-social-icon'} /></a>
                </div>
                <div className={'contact-footer-container'}></div>
                <p className={'contact-footer-text'}>© 2020 POCCODER. ALL RIGHTS RESERVED.</p>
            </div>
        )
    }
}