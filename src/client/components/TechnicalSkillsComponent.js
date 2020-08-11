import React, { Component } from 'react';
import '../index.css';

import skills from '../images/skills.png';
import mobile_skills from '../images/mobile_skills.png';

export default class TechnicalSkillsComponent extends Component {

    render() {

        return (
            <div className={'tech-skills-div'}>
                <div className={'tech-skills-container'}>
                    <span className={'tech-skills'}>Technical Skills</span>
                </div>
                <img src={skills} className={'desktop-skills-background'} />
                <img src={mobile_skills} className={'mobile-skills-background'} />             
            </div>
        )
    }
}