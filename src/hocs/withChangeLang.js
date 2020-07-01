import React, { Component } from "react";
import ChangeLangRoute from "../routes/ChangeLangRoute";

const withChangeLang = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <>
          <ChangeLangRoute />
          <WrappedComponent />
        </>
      );
    }
  };
};

export default withChangeLang;
