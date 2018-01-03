import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class ResumeTasks extends Component {
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

ResumeTasks.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ResumeTasks.defaultProps = {
  className: null
};
 
export default ResumeTasks;