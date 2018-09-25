import React, { Component } from "react";
import Section from "./Section";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Footer from "./Footer";
import Splash from "./Splash";
import Menu from "./Menu";
import MenuAnchor from "./MenuAnchor";
import Projects from "./Projects";
 
class Main extends Component {
  render() {
    return (
      <div>
        <Menu items={[
          {index: 'about', name: 'About'}, 
          {index: 'education', name: 'Education'}, 
          {index: 'experience', name: 'Experience'}, 
          {index: 'projects', name: 'Projects'}, 
          {index: 'contact', name: 'Contact Me'}
        ]}/>
        <main>
          <Splash /> 
          <MenuAnchor index="about" />
          <Section 
            title="About"
            className="about"
          >
            <About />
          </Section>
          <MenuAnchor index="education" />
          <Section 
            title="Education"
            className="education"
          >
            <Education />
          </Section>
          <MenuAnchor index="experience" />
          <Section 
            title="Experience"
            className="experience"
          >
            <Experience />
          </Section>
          <MenuAnchor index="projects" />
          <Section 
            title="Projects"
            className="projects"
          >
            <Projects />
          </Section>
          <MenuAnchor index="contact" />
          <Footer />
        </main>   
      </div>
    );
  }
}
 
export default Main;