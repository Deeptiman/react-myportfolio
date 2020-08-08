import React, { Component } from 'react';
import '../index.css';

import skills from '../images/skills.png';

export default class TechnicalSkillsComponent extends Component {

    render() {

        return (
            <div className={'tech-skills-div'}>
                <div className={'tech-skills-container'}>
                    <span className={'tech-skills'}>Technical Skills</span>
                </div>
                <img src={skills} className={'dashboard-skills-background'} />
            </div>
        )
    }
}