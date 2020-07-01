import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

import withChangeLang from "../hocs/withChangeLang";

class SampleRoute extends Component<WithTranslation> {
  render() {
    const { t: translate } = this.props;
    return (
      <>
        <p>{translate("common:hi")}</p>
        <p>{translate("common:hello")}</p>
      </>
    );
  }
}

export default withChangeLang(withTranslation("translation")(SampleRoute));
