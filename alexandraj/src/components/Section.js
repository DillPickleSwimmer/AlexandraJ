import React, { Component } from "react";
import PropTypes from 'prop-types';
import Title from './Title';
 
class Section extends Component {
  render() {
    const { children, title, className } = this.props;

    return (
      <div className="section">
        <div className="section-head">
          <Title className={className}>
            { title }
          </Title>
        </div>
        <div className="section-content">
          {children}
        </div>
      </div> 
    );
  }
}

Section.PropTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: null,
};
 
export default Section;