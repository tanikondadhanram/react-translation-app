import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  WithTranslation,
  withTranslation,
  I18nextProvider,
} from "react-i18next";
import i18n from "./i18n";

class App extends React.Component<WithTranslation> {
  handleOnclick = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading......</div>}>
          <div className="App">
            <nav className="p-12 bg-gray-600 w-full">
              <button onClick={this.handleOnclick} value="en">
                english
              </button>
              <button onClick={this.handleOnclick} value="hi">
                hindi
              </button>
            </nav>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <p>{this.props.t("todos:hi")}</p>
              <p>{this.props.t("todos:hello")}</p>
            </header>
          </div>
        </Suspense>
      </I18nextProvider>
    );
  }
}

export default withTranslation("translation")(App);
