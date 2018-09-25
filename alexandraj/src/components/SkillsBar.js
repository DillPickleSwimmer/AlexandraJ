import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class SkillsBar extends Component {
  render() {
    const { skills } = this.props;

    const skillsTop = skills.filter((element, index) => {
      return index % 2 === 0;
    })
    const skillsBottom = skills.filter((element, index) => {
      return index % 2 !== 0;
    })

    return (
      <div className="skills-bar">
        <div className="top-skills">
          {skillsTop.reverse().map(skill => {
            return(<div className="skill" key={skill}>
              <div className="skill-name">
                {skill}
              </div>
              <div className="connect-line" />
            </div>);
          })}
        </div>
        <div className="arrow title">
          <div className="line-left" />
          <div className="left">I'm Learning</div>
          <div className="line-center" />
          <div className="right">I'm Good At</div>
          <div className="line-right" />
          <div className="head" >⮞</div>
        </div>
        <div className="bottom-skills">
          {skillsBottom.reverse().map(skill => {
            return(<div className="skill" key={skill}>
              <div className="connect-line" />
              <div className="skill-name">
                {skill}
              </div>
            </div>);
          })}
        </div>
      </div>  
    );
  }
}

SkillsBar.PropTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsBar;