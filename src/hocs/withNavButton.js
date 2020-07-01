import React, { Component } from "react";

import NavigatingButton from "../components/NavigatingButton/NavigatingButton";

const withNavButton = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <>
          <NavigatingButton routeName="TestRoute" routeValue={i18n.language} />
          <NavigatingButton
            routeName="SampleRoute"
            routeValue={i18n.language}
          />
          <WrappedComponent />
        </>
      );
    }
  };
export default withNavButton;
