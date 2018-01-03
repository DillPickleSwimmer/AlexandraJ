import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class ExperienceCard extends Component {
  render() {
    const { company, position, city, state, country, 
    	startDate, endDate, className, children, description } = this.props;

    return (
      <div className="experience-card">
      	<div className={className}>
  			<div className="title">
	      		<div className="logo"></div>
		      	<div className="company">&#11164; { company }  &#11166;</div>
		      	<div className="description">{ description }</div>
		      	<div className="location">
		      		<div className="city">{ city }</div> &#8226;{' '}
			      	<div className="state">{ state }</div> &#8226;{' '}
			      	<div className="country">{ country }</div>
		      	</div>
		      	<div className="duration">
					<div className="startDate">{ startDate }</div>{' - '}
					<div className="endDate">{ endDate }</div>
		      	</div>
	      	</div>
	      	<div className="content">
		      	<div className="position">{ position }</div>
		      	<div className="content">
		      		{children}
		      	</div>
	      	</div>
      	</div>
      </div>  
    );
  }
}

ExperienceCard.PropTypes = {
	company: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

ExperienceCard.defaultProps = {

};
 
export default ExperienceCard;