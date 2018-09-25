import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import Sections from './ExperienceCardSections';

class Experience extends Component {
  render() {
    return (
      <div className="experience experience-card-wrapper">
      <ExperienceCard
        company="Uber"
        description="Eats Restaurant Experinece Team"
        position="Front-end Engineering Intern"
        city="New York"
        state="New York"
        country="USA"
        startDate="May"
        endDate="Aug 2018"
        className="uber"
      >
        <Sections title="Skills" colorCode={1}>
          JavaScript, ReactJS(Native), Redux, Sagas, Enzyme, Tape, Phabricator
        </Sections>
        <Sections title="Out Of Item" colorCode={1}>
          Added capability to notify customer of order issues and handle modified orders.
          <br />Anticipated to reduce order cancellations significantly.
        </Sections>
        <Sections title="Restaurant Dashboard" colorCode={1}>
          Scoped and implemented menu redesign.
          <br />Executed and managed global code push deploys.
        </Sections>
        <Sections title="Wok" colorCode={1}>
          Added endpoint polling mechanism to internal web tool for gathering live courier location for map.
          <br /><a href="https://docs.google.com/document/d/1AWsBddR1R3RF3IFU0VIARlX8J0V1oZX5OTmKefRJPcY/edit?usp=sharings" target="_blank"  rel="noopener noreferrer">Documented Here</a>
        </Sections>
      </ExperienceCard>
      <br />
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
            <br /><b>Front-end:</b> Implemented website designs using ReactJS components.
            <br /><b>Back-end:</b> Rails migrations, models, controllers, views for social media; other rails functionality changes.
          </Sections>
          <Sections title="Testing Pipeline" colorCode={1}>
            Discovered & documented process for running selenium tests locally.
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
            <br />Designed & implemented front-end integration using JS and Backbone.
            <br />Mapped collected data to internal model using Scala and NPL (Network Programming Language).
          </Sections>
          <Sections title="Other" colorCode={1}>
            Front-end bug-fixing.
            <br />Backend customizations to support certain network devices.
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
            Designed & implemented PHP tool for converting word documents into custom-formatted HTML.
            <br />Eliminated majority of 3rd party conversion costs.
            <br />Initialized PHP on company servers.
          </Sections>
          <Sections title="Other" colorCode={1}>
            VBA and PHP scripts to increase speed of documentation.
            <br />Performed database investigations in SQL and PHP.
            <br />Bug fixing in C#.
          </Sections>
        </ExperienceCard>
      </div>
    );
  }
}

export default Experience;
