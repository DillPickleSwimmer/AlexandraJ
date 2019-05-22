import React, { Component } from "react";
import Card from "./ProjectCard";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="intro">Personal & group projects I've worked on</div>
        <div className="help">Hover/click on tiles for details.</div>
        <div className="project-card-wrapper">
          <Card
            title="This Website"
            overview="Updated portfolio of my work experience and projects."
            imageClass="thiswebsite"
            skills={['Javascript', 'React', 'HTML & CSS']}
          >
            <ul>
              <li>Programmed using React skills gained at my last job.</li>
              <li>Full remake in Jan 2018</li>
              <li>Details about my experiences, skills, and fun projects I've worked on.</li>
            </ul>

            <a href="https://github.com/DillPickleSwimmer/AlexandraJ" target="_blank"  rel="noopener noreferrer">Github Link</a>
          </ Card>
          <Card
            title="Course Planner FYDP"
            overview="In Progress - A web application to simplify process of planning courses at UW"
            imageClass="watcourse"
            skills={['Javascript (React)', 'Python (Flask)', 'Wireframing', 'Application Devlopment']}
          >
            <ul>
              <li>Team of 6 students, for our Fourth Year Design Project (FYDP).</li>
              <li>Availability, pre-requisite, anti-requisite checking.</li>
              <li>Course recommendations if not accepted into a course.</li>
              <li>Automatic plan generation based on shortlisted courses.</li>
            </ul>
            <a href="https://drive.google.com/file/d/1Epf-AqSz8KV6IC-bdbMCrURLtAvefD2k/view" target="_blank" rel="noopener noreferrer">Demo Link</a>
          </ Card>
          <Card
            title="C++ Visual Card Game"
            overview="Applies MVP design pattern in C++ to program a graphical card game (with GUI)."
            imageClass="cppcards"
            skills={['C++', 'GTKMM', 'OOP']}
          >
            <a href="https://github.com/DillPickleSwimmer/CS247Project" target="_blank"  rel="noopener noreferrer">Github Link</a>
            <ul>
              <li>MVP design pattern applied.</li>
              <li>Object oriented design principles in C++.</li>
              <li>Implemented graphics using GTKMM library.</li>
              <li>Visual card game application with multiple players and varying difficulty of AI's.</li>
            </ul>
          </ Card>
          <Card
            title="Tiva Launchpad Minigames"
            overview="Lead group of 5 students to program tactile and visual minigames on the Tiva Launchpad (Arduino)"
            imageClass="tiva"
            skills={['C', 'Arduino', 'Leadership', 'Teamwork']}
          >
            <iframe src="https://www.youtube.com/embed/aXgRnH6_q0U?rel=0" title="tiva" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            <ul>
              <li>Leader of team of 5 classmates (due to previous Arduino experience).</li>
              <li>Games included: Guitar hero, Bop it, Simon Says, Speed... etc.</li>
              <li>Programmed OLED display functions to allow teammates to more easily create their graphics.</li>
              <li>Written in Arduino C</li>
            </ul>
          </ Card>
          <Card
            title="Hexapod Arduino Robot"
            overview="Designed, built & programmed 6-legged walking robot."
            imageClass="hexapod"
            skills={['C', 'Arduino', 'Robotics']}
          >
            <iframe src="https://drive.google.com/file/d/1j_8m1rQ74_lZ7VxJ866NN26k4XVKLDc7zQ/preview" title="hexapod" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            <ul>
              <li>Hexapod robot has 6 legs with 3 joints each that have been programmed to allow it to walk in various directions and do other manoevers.</li>
              <li>Controlled via wireless remote controller.</li>
              <li>Joints are made of servos combined with two servo controllers.</li>
            </ul>
          </ Card>
          <Card
            title="Line-following Arduino Robot"
            overview="Designed, built & programmed line-following robot & obstacle detecting toy car."
            imageClass="linefollower"
            skills={['C', 'Arduino', 'Robotics']}
          >
            <ul>
              <li>Line-following robot is a car that uses sensors to follow lines on the ground and avoid obstacles in front of it.</li>
              <li>Controlled via bluetooth from a mobile phone.</li>
            </ul>
          </ Card>
          <Card
            title="Minesweeper Android App"
            overview="Basic minesweeper game for android devices."
            imageClass="minesweeper"
            skills={['Android', 'Java']}
          >
            <ul>
              <li>First mobile app.</li>
              <li>Randomly placed bombs, win if flag all bombs / reveal all other tiles, lose if click on bomb, if blank tile is clicked reveals area around it.</li>
              <li>Native Android Java application in Android Studio.</li>
            </ul>
          </ Card>
          <Card
            title="WLP4 -> MIPS Compiler"
            overview="Scans, parses and performs semantic analysis. Compiles WLP4 to MIPS assembly."
            imageClass="compiler"
            skills={['C++', 'Compilers']}
          >
            <ul>
              <li>WLP4 is a University of Waterloo created language, essentially simplified C.</li>
              <li>Scans, parses, and performs semantic analysis on code (throws errors for incorrect code).</li>
              <li>Compiles valid commands into MIPS assembly language.</li>
              <li>Also wrote an assembler to convert MIPS to machine code.</li>
            </ul>
          </ Card>
          <Card
            title="Chicken Run"
            overview="My first game project. Created in Visual Basic."
            imageClass="chickenrun"
            skills={['VB6', 'Game Dev']}
          >
            <iframe src="https://www.youtube.com/embed/EPGnxNC5b0Q" title="chickenrun" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            <ul>
              <li>2nd most popular 'Visual Basic Game' on Youtube (100K+ views).</li>
              <li>Solves the visual basic lack of double buffering problem (which usually makes PNGs flicker).</li>
            </ul>
          </ Card>
          <Card
            title="Illume"
            overview="Minigames and lessons used to teach multiple choice material."
            imageClass="illume"
            skills={['VB6', 'Game Dev', 'Teamwork']}
          >
            <iframe src="https://www.youtube.com/embed/lL54-4CtPB8" title="illume" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            <ul>
              <li>Project of 2 students.</li>
              <li>Visual basic 6 games: multiplayer battleship on school server, frogger</li>
              <li>Customizable lessons, quizzes, accounts, score-keeping so teachers could use to teach, test, and quiz students.</li>
            </ul>
          </ Card>
        </div>
      </div>
    );
  }
}

export default Projects;
