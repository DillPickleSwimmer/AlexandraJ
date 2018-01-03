import React, { Component } from "react";
import PropTypes from 'prop-types';
 
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleShow = this.toggleShow.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  toggleShow() {
    this.setState({open: !this.state.open});
  }

  scrollTo(index) {
    var item = document.querySelector(".index-" + index);
    if (item) {
      item.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className="menu title">
        <div className={this.state.open ? "closed" : "open"}>
          <div className="nav-icon" onClick={this.toggleShow}/>
        </div>
        <div className={this.state.open ? "list open" : "closed"} onClick={this.toggleShow}>
          <ul>
            {items.map((item) => {
              return(<li key={item.index} onClick={() => {this.scrollTo(item.index)}}>{item.name}</li>);
            })}
          </ul>
          <div className="close" />
        </div>
      </div>  
    );
  }
}

Menu.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired
  })).isRequired,
};

Menu.defaultProps = {
};
 
export default Menu;