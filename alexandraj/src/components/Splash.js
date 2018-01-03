import React, { Component } from "react";
import Title from './Title';
 
class Splash extends Component {
  scrollOut() {
    var arrow = document.querySelector(".splash-down-arrow");
    if (arrow) {
      arrow.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  render() {
    return (
      <div className="section splash-section">
        <div className="section-head">
          <Title className='splash'>
            Alexandra Jaszkul
          </Title>
        </div>
        <div className="section-content" onClick={this.scrollOut}>
          <div className="splash-down-arrow"/>
        </div>
      </div> 
    );
  }
}

export default Splash;