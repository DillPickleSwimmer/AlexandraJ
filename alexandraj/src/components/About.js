import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="photo"></div>
        <div className="content">
          <div className="title main-title">Hey, I'm Alexandra!</div>
          <div className="sub-title">Welcome to my website, your #1 source for info about my experience and projects.</div>
          <div className="sub-sections">
            <div className="sub-section skills">
              <div className="mini-title">Experience Summary</div>
              <ul>
                <li>Javascript (React, Backbone)</li>
                <li>C++/C</li>
                <li>Rails</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>Scala</li>
              </ul>
            </div>
            <div className="sub-section learn">
              <div className="mini-title">Things I'm Hoping to Learn</div>
              <ul>
                <li>Android/IOS Development</li>
                <li>More Javascript libraries</li>
                <li>Java</li>
                <li>Machine Learning & Computer Vision</li>
                <li>Anything else that I haven't tried yet!!</li>
              </ul>
            </div>
            <div className="sub-section hobbies">
              <div className="mini-title">Hobbies</div>
              <ul>
                <li>Skiing (Founder of the Unofficial Waterloo Ski Club)</li>
                <li>Challenging Hikes</li>
                <li>Swimming</li>
                <li>Dogs</li>
                <li>Video Games</li>
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
            </div> 
          </div> 
        </div>
      </div>  
    );
  }
}
 
export default About;