import React, { Component } from "react";
import Navbar from "../component/navbar";
import Button from "../component/button";
import Accrodion from "../component/accrodion";
import Box from "../component/box";
import Content from "../component/content";

import "../css/style.scss";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    return (
      <>
        <div>
          <Navbar />

          <div className="Container">
            <div className="Container-4">
              <Accrodion />
            </div>
            <div className="Container-4">
              <Box variant="lg">
                <Content />
              </Box>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
