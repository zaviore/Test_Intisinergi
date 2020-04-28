import React, { Component } from "react";
import "../css/style.scss";
import Icon from "../images/user.png";
class Navber extends Component {
  render() {
    return (
      <>
        <div className="Navbar">
          <div className="container">
            <div>
              <b>Wehello</b>
            </div>
            <div>
              <img src={Icon} width="30px" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navber;
