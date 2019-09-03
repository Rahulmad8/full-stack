import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import Header from './components/Header';
import Landing from "./components/Landing"

const Survey = () => <h1>Survey</h1>
// const Dashboard = () => <h1>Dashboard</h1>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  };

  render() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />  
        <Route exact path="/" component = {Landing} />
        <Route exact path="/survey" component = {Survey} />
        
      </BrowserRouter>
    </div>
  );
  }
}

export default connect(null, actions) (App);
