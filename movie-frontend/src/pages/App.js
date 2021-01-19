import "./App.css";
import React from "react";
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; 
import Question from "../components/Question";

class App extends React.Component {
  render(){
    return(
        <div className="App">
        <Question/>
        </div>
    );
  }
}

export default App;
