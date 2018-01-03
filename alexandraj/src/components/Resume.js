import React, { Component } from "react";
import Card from "./ResumeExperienceCard"; 

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="header-section">
          <div className="title">Alexandra Jaszkul</div>
          <div className="contact">
            <div>Software Engineering</div>
            <div>ID: 20602306</div>
            <div>acjaszku@edu.uwaterloo.ca </div>
            <a href="http://www.alexandraj.net" target="_blank" rel="noopener noreferrer">www.alexandraj.net</a>
          </div>
          <div className="photo" />
        </div>
        <div className="resume-section skills-summary">
          <div className="label title">&#11164; Skills</div>
          <div className="details">

          </div>
        </div>
        <div className="resume-section experience-section">
          <div className="label title">&#11164; Experience</div>
          <div className="details">
            <Card 
              name="Redbooth"
              location="Palo Alto, California" 
              time="Sep - Dec 2017"
              position="Front-end Engineering Intern"
              skills={['Javascript', 'ReactJS', 'Rails', 'SCSS', 'Github', 'Jenkins', 'Docker']}
            >
              <div className="tasks">
                Customer Stories <div className="task">www.redbooth.com/customers Front-end: Implemented designs using ReactJS.
                Back-end: Rails migrations, models, controllers, views for social media; other rails changes.</div>
                Testing Pipeline <div className="task">Created process for running integration tests locally.
                Debugged & fixed errors blocking tests from running in Jenkins.</div>
                Hackathon <div className="task">Amazon Alexa skills for Redbooth</div>
              </div>
            </Card>

            <Card 
              name="Auvik Networks"
              location="Waterloo, Ontario"
              time="Jan - Apr 2017"
              position="Fullstack Engineering Intern"
              skills={['Javascript', 'Backbone', 'Marionette', 'Scala', 'BitBucket']}
            >
              <div className="tasks">
                Meraki Cloud Controller <div className="task">Investigated polling via SNMP vs REST API
                Designed front-end integration using JS and Backbone.
                Mapped collected data to internal model using Scala and NPL.</div>
                Other <div className="task">Bug fixing & front-end modifications</div>
              </div>
            </Card>

            <Card
              name="Manulife"
              location="Kitchener, Ontario"
              time="May - Aug 2016"
              position="Applications Developer Intern"
              skills={['PHP', 'C#', 'SQL', 'IIS', 'VBA/Macros']}
            >
              <div className="tasks">
                BAAG File Generator <div className="task">Convert word docs to custom formatted HTML using PHP.
                Eliminate 3rd party conversion costs.
                Initialize PHP on company servers.</div>
                Other <div className="task">VBA and PHP scripts to increase speed of documentation.
                Database investigations in SQL.
                Big fixing in C#.</div>
              </div>
            </Card>
          </div>
        </div>
        <div className="resume-section education-section">
          <div className="label title">&#11164; Education</div>
          <div className="details">
            <Card
              name="University of Waterloo"
              location="Waterloo, Ontario"
              time="Sep 2015 - Present"
              position="Bachelor of Software Engineering 3A"
              skills={[]}
            >

            </Card>
          </div>
        </div>
        <div className="resume-section projects">
          <div className="label title">&#11164; Projects</div>
          <div className="details">

          </div>
        </div>
      </div>  
    );
  }
}
 
export default Resume;