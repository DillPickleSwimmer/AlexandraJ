import React from "react";
import ReactDOM from "react-dom";
import RouterWrapper from "./components/RouterWrapper";

import "./stylesheets/application.css";
import "./stylesheets/section.css";
import "./stylesheets/title.css";
import "./stylesheets/education.css";
import "./stylesheets/experience-card.css";
import "./stylesheets/about.css";
import "./stylesheets/footer.css";
import "./stylesheets/menu.css";
import "./stylesheets/resume.css";
 
ReactDOM.render(
  <RouterWrapper/>, 
  document.getElementById("root")
);