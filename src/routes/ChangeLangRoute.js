import React, { Component } from "react";

import ChangeLangButton from "../components/ChangeLangButton/ChangeLangButton";

class ChangeLangRoute extends Component {
  render() {
    return (
      <div>
        <ChangeLangButton language="english" lang="en" />
        <ChangeLangButton language="hindi" lang="hi" />
        <ChangeLangButton language="telugu" lang="te" />
      </div>
    );
  }
}

export default ChangeLangRoute;
