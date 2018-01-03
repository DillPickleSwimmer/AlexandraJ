import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class MenuAnchor extends Component {
  render() {
    const { index } = this.props;

    return (
      <div className="menu-anchor"><div className={'index-'+index} /></div> 
    );
  }
}

MenuAnchor.PropTypes = {
  index: PropTypes.string.isRequired
};

MenuAnchor.defaultProps = {
};
 
export default MenuAnchor;