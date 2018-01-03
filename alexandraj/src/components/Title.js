import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class Title extends Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className="fixed-title">
        <div className={"title main-title " + className}>
          <div className="content">
            { children }
          </div>
        </div> 
      </div>  
    );
  }
}

Title.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: null
};
 
export default Title;