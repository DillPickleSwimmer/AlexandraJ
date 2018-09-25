import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class ProjectCard extends Component {
	constructor(props) {
		super(props);

		this.state = { open: false };

		this.toggleOpen = this.toggleOpen.bind(this); 
		this.toggleClose = this.toggleClose.bind(this); 
	}

	toggleOpen() {
		this.setState({open: true});
	}

	toggleClose() {
		this.setState({open: false});
	}

	render() {
		const { children, title, skills, overview, imageClass } = this.props;
		return (
		  <div className="project-card">
		  	<div className="card" onMouseOver={this.toggleOpen} onMouseLeave={this.toggleClose}>
		  		{!this.state.open && <div>
			      	<div className={imageClass + " image"} />
			      	<div className="details">
				      	<div className="title">{title}</div>
				      	<div className="skills">{skills.join(', ')}</div>
				      	<div className="overview">{overview}</div>
			      	</div>
		      	</div>}
		      	{this.state.open && <div className="full-details">{children}</div>}
		  	</div>
		  </div>  
		);
	}
}

ProjectCard.PropTypes = {
	title: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	imageClass: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
	children: PropTypes.node.isRequired,
};

ProjectCard.defaultProps = {

};
 
export default ProjectCard;