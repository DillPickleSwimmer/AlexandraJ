import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import Sections from './ExperienceCardSections';
 
class Experience extends Component {
  render() {
    return (
      <div className="experience experience-card-wrapper">
        <ExperienceCard
          company="Redbooth"
          description="Task management web app"
          position="Front-end Engineering Intern"
          city="Palo Alto"
          state="California"
          country="USA"
          startDate="Sept"
          endDate="Dec 2017"
          className="redbooth"
        >
          <Sections title="Skills" colorCode={1}>
            JavaScript, ReactJS, Rails, SCSS, Github, Jenkins, Docker
          </Sections>
          <Sections title="Customer Stories" colorCode={1}>
            <a href="https://redbooth.com/customers" target="_blank"  rel="noopener noreferrer">Live Here</a>
            <br /><b>Front-end:</b> Implemented designs using ReactJS.
            <br /><b>Back-end:</b> Rails migrations, models, controllers, views for social media; other rails changes.
          </Sections>
          <Sections title="Testing Pipeline" colorCode={1}>
            Created process for running integration tests locally.
            <br />Debugged & fixed errors blocking tests from running in Jenkins. 
          </Sections>
          <Sections title="Hackathon" colorCode={1}>
            Amazon Alexa skills for Redbooth.
          </Sections>
        </ExperienceCard>
        <br />
        <ExperienceCard
          company="Auvik Networks"
          description="Network management tool"
          position="Fullstack Engineering Intern"
          city="Waterloo"
          state="Ontario"
          country="Canada"
          startDate="Jan"
          endDate="Apr 2017"
          className="auvik"
        >
          <Sections title="Skills" colorCode={1}>
            JavaScript, Backbone, Marionette, Scala, BitBucket
          </Sections>
          <Sections title="Meraki Cloud Controller" colorCode={1}>
            Investigated polling via SNMP vs REST API 
            <br /><a href="https://drive.google.com/open?id=1qftPKvn5ufSiOzboUbMK1dz0EONIp6IEjEy6bt1VJYw" target="_blank"  rel="noopener noreferrer">Documented Here</a>
            <br />Designed front-end integration using JS and Backbone.
            <br />Mapped collected data to internal model using Scala and NPL.
          </Sections>
          <Sections title="Other" colorCode={1}>
            Bug fixing & front-end modifications
          </Sections>
        </ExperienceCard>
        <br />
        <ExperienceCard
          company="Manulife"
          description="Flex benefits team"
          position="Applications Developer Intern"
          city="Kitchener"
          state="Ontario"
          country="Canada"
          startDate="May"
          endDate="Aug 2016"
          className="manulife"
        >
          <Sections title="Skills" colorCode={1}>
            PHP, C#, SQL, IIS, VBA / Word Macros
          </Sections>
          <Sections title="BAAG File Generator" colorCode={1}>
            Convert word docs to custom formatted HTML using PHP.
            <br />Eliminate 3rd party conversion costs.
            <br />Initialize PHP on company servers.
          </Sections>
          <Sections title="Other" colorCode={1}>
            VBA and PHP scripts to increase speed of documentation.
            <br />Database investigations in SQL.
            <br />Big fixing in C#.
          </Sections>
        </ExperienceCard>
      </div>  
    );
  }
}
 
export default Experience;