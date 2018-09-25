import React, { Component } from "react";
import Card from "./ResumeExperienceCard";
import Sections from './ExperienceCardSections';
import SkillsBar from './SkillsBar';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="header-section">
          <div className="title">Alexandra Jaszkul</div>
          <div className="contact">
            <div>University of Waterloo</div>
            <div>Software Engineering 3B</div>
            <div>ID: 20602306</div>
            <div>acjaszku@edu.uwaterloo.ca </div>
          </div>
          <div className="photo" />
        </div>
        <div className="resume-section skills-summary">
          <div className="label title">Skills</div>
          <div className="details">
            <SkillsBar skills={['Javascript (React, Backbone, jQuery)', 'C++', 'C', 'Java', 'Rails', 'Android', 'SQL', 'Arduino', 'PHP', 'MIPS & ARM', 'Scala', 'VBA/6', ]} />
          </div>
        </div>
        <div className="resume-section experience-section">
          <div className="label title">Experience </div>
          <div className="details">
            <Card
              name="Uber (Eats)"
              location="New York, New York"
              time="May - Aug 2018"
              position="Front-end Engineering Intern"
              skills={['Javascript', 'ReactJS', 'Rails', 'SCSS', 'Github', 'Jenkins', 'Docker']}
            >
              <div className="tasks">
                <Sections title="Out Of Item" colorCode={1}>
                  Added capability to notify customer of order issues and handle modified orders.
                  <br />Anticipated to reduce order cancellations significantly.
                </Sections>
                <Sections title="Restaurant Dashboard" colorCode={1}>
                  Scoped and implemented menu redesign.
                  <br />Executed and managed global code push deploys.
                </Sections>
                <Sections title="Wok" colorCode={1}>
                  Added <a href="https://docs.google.com/document/d/1AWsBddR1R3RF3IFU0VIARlX8J0V1oZX5OTmKefRJPcY/edit?usp=sharings" target="_blank"  rel="noopener noreferrer">endpoint polling mechanism</a>
                  to internal web tool for gathering live courier location for map.
                </Sections>
              </div>
            </Card>

            <Card
              name="Redbooth"
              location="Palo Alto, California"
              time="Sep - Dec 2017"
              position="Front-end Engineering Intern"
              skills={['Javascript', 'ReactJS', 'Rails', 'SCSS', 'Github', 'Jenkins', 'Docker']}
            >
              <div className="tasks">
                <Sections title="Customer Stories" colorCode={1}>
                  Live at:
                  <a href="https://redbooth.com/customers" target="_blank"  rel="noopener noreferrer"> Redbooth.com/Customers</a>
                  <br />Front-end: Implemented website designs using ReactJS components.
                  <br />Back-end: Rails migrations, models, controllers, views for social media; other rails functionality changes.
                </Sections>
                <Sections title="Testing Pipeline" colorCode={1}>
                  Discovered & documented process for running selenium tests locally.
                  <br />Debugged & fixed errors blocking tests from running in Jenkins.
                </Sections>
                <Sections title="Hackathon" colorCode={1}>
                  Amazon Alexa skills for Redbooth.
                </Sections>
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
                <Sections title="Meraki Cloud Controller" colorCode={1}>
                  Investigated polling controller via <a href="https://drive.google.com/open?id=1qftPKvn5ufSiOzboUbMK1dz0EONIp6IEjEy6bt1VJYw" target="_blank"  rel="noopener noreferrer">SNMP vs REST API</a>
                  <br />Designed & implemented front-end integration using JS and Backbone.
                  <br />Mapped collected data to internal model using Scala and NPL (Network Programming Language).
                </Sections>
                <Sections title="Other" colorCode={1}>
                  Front-end bug-fixing.
                  <br />Backend customizations to support abnormal network devices.
                </Sections>
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
                <Sections title="BAAG File Generator" colorCode={1}>
                  Designed & implemented PHP tool for converting word documents into custom-formatted HTML.
                  <br />Eliminated majority of 3rd party conversion costs.
                  <br />Initialized PHP on company servers.
                </Sections>
                <Sections title="Other" colorCode={1}>
                  VBA and PHP scripts to increase speed of documentation.
                  <br />Performed database investigations in SQL and PHP.
                  <br />Bug fixing in C#.
                </Sections>
              </div>
            </Card>
          </div>
        </div>

        <div className="resume-section bottom-section">
          <div className="label"><div className="title">Website </div></div>
          <div className="details">
            <br /><a href="http://www.alexandraj.net" target="_blank" rel="noopener noreferrer"><b>www.AlexandraJ.net</b></a>
            <br />Project portfolio, witten in ReactJS.
          </div>
        </div>

        <div className="resume-section bottom-section">
          <div className="label"><div className="title">Learning Objectives </div></div>
          <div className="tasks">
            <ul>
              <li>Native Android & iOS development skills.</li>
              <li>Advance knowledge and experience with backend.</li>
              <li>Improve front-end skills with new JS frameworks.</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Resume;

/*<div className="resume-section projects-section">
  <div className="label"><div className="title">Projects </div>
    <div className="sub-label">More projects & details on my website!</div></div>
  <div className="details">
    <Sections title="Website" colorCode={1}>
      <a href="http://alexandraj.net" target="_blank"  rel="noopener noreferrer">Alexandraj.net</a>
      <br />Projects and portfolio written in ReactJS.
    </Sections>
    <Sections title="Robotics" colorCode={1}>
      <i>Tiva Launchpad (Arduino) Minigames:</i> Coordinated team of 5 students to create visual and tactile minigames.
      <br /><i>Arduino Robots:</i> Built and programmed hexapod and line-following robots.
    </Sections>
    <Sections title="Other Fun Stuff" colorCode={1}>
      <i>Unofficial Waterloo Ski Club:</i> Founder & leader of 90+ member club.
      <br /><i>WLP4 -> MIPS Compiler:</i> Scan, parse, semantic analysis. Written in C++.
      <br /><i>Android Apps:</i> Minesweeper app. Working on an auto-generated logic-puzzle app.
    </Sections>
  </div>
</div>*/

/*<div className="resume-section education-section">
  <div className="label title">Education </div>
  <div className="details">
    <Card
      name="University of Waterloo"
      location="Waterloo, Ontario"
      time="Sep 2015 - Present"
      position="Bachelor of Software Engineering 3A"
      skills={["Bachelor of Software Engineering 3A"]}
    >
    </Card>
  </div>
</div>*/
