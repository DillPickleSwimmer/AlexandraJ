import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import Sections from './ExperienceCardSections';
 
class Education extends Component {
  render() {
    return (
      <div className="education experience-card-wrapper">
        <ExperienceCard
          company="University of Waterloo"
          position="Bachelor of Software Engineering - 3A"
          city="Waterloo"
          state="Ontario"
          country="Canada"
          startDate="Sept 2015"
          endDate="Present"
          className="UW"
        >
          <Sections title="Awards" colorCode={1}>
            President's Scholarship of Distinction
          </Sections>
          <Sections title="Extra" colorCode={1}>
            Unofficial Waterloo Ski Club Founder (80+ members)
          </Sections>
        </ExperienceCard>
        <ExperienceCard
          company="Sacred Heart High School"
          position="Ontario Secondary School Diploma"
          city="Walkerton"
          state="Ontario"
          country="Canada"
          startDate="Sept 2011"
          endDate="June 2015"
          className="shhs"
        >
          <Sections title="Awards" colorCode={1}>
            Governor General's Award
          </Sections>
          <Sections title="Extra" colorCode={1}>
            French Immersion
            <br />UW Math and Chemistry Contests
          </Sections>
        </ExperienceCard>
      </div>  
    );
  }
}
 
export default Education;