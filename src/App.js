import React, { Component, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";

const SampleRoute = lazy(() => import("./routes/SampleRoute"));
const TestRoute = lazy(() => import("./routes/TestRoute"));

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading....</div>}>
          <Router>
            <Switch>
              <Route exact path="/SampleRoute" component={SampleRoute} />
              <Route exact path="/TestRoute" component={TestRoute} />
              <Redirect exact from="/" to="/SampleRoute" />
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    );
  }
}

export default App;
