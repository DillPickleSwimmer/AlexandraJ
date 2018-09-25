import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class ResumeExperienceCard extends Component {
  render() {
    const { name, location, time, position, skills, children } = this.props;

    return (
      <div className="resume-section-card">
        <div className="head">
          <div className="card-name title">{ name }</div>
          {' '} <div className="special-text">&#8226;</div> {' '}
          <div className="location title">{ location }</div>
          {' '} <div className="special-text">&#8226;</div> {' '}
          <div className="time title">{ time }</div>
        </div>
        <div className="content">
          <div className="position title">{ position }</div>
          <div className="skills">{ skills.join(', ') }</div>
          { children }
        </div>
      </div>
    );
  }
}

ResumeExperienceCard.PropTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node
};

ResumeExperienceCard.defaultProps = {
  children: null,
};
 
export default ResumeExperienceCard;