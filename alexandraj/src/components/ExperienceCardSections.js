import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class ExperienceCardSections extends Component {
  render() {
    const { title, children, colorCode } = this.props;

    return (
      <div className="experience-card-sections">
      	<div className={"title color-"+colorCode.toString()}>
      		{title}
      	</div>
      	<div className="content">
      		{children}
      	</div>
      </div>  
    );
  }
}

ExperienceCardSections.PropTypes = {
	title: PropTypes.string.isRequired, 
	children: PropTypes.node.isRequired,
	colorCode: PropTypes.number.isRequired,
};

ExperienceCardSections.defaultProps = {

};
 
export default ExperienceCardSections;