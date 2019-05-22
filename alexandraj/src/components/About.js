import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="photo"></div>
        <div className="content">
          <div className="title main-title">Hey, I'm Alexandra!</div>
          <div className="sub-sections">
            <div className="sub-section skills">
              <div className="mini-title">Recent Experience</div>
              <ul>
                <li>Javascript (React)</li>
                <li>Golang</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="sub-section learn">
              <div className="mini-title">Learning Objectives</div>
              <ul>
                <li>New frontend experience; JS frameworks</li>
                <li>User experience and customer facing products</li>
                <li>Backend skills</li>
                <li>Native Android/IOS Development</li>
              </ul>
            </div>
            <div className="sub-section hobbies">
              <div className="mini-title">Hobbies</div>
              <ul>
                <li>Hiking</li>
                <li>World Traveling</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
          <div className="resume-button-wrapper">
            <NavLink className="resume-button resume-link" to="/resume">Preview Resume</NavLink>
            <a
              className="resume-button resume-pdf"
              href="resume.pdf"
              download
            >Download Resume</a>
            <div className="social-media">
              <a href="http://www.linkedin.com/in/jaszkul" target="_blank"  rel="noopener noreferrer"><div className="linkedin"></div></a>
              <a href="https://github.com/DillPickleSwimmer" target="_blank"  rel="noopener noreferrer"><div className="github"></div></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
