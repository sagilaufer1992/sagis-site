import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { simpleAction } from "./actions/simpleAction";

interface State {
  currentProps: string;
}

interface Props {
  simpleAction?: () => void;
}
class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>{JSON.stringify(this.props)}</div>
        <button onClick={this._onClick}>Click Me!</button>
      </div>
    );
  }

  private _onClick = () => {
    this.props.simpleAction && this.props.simpleAction();
  };
}

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
