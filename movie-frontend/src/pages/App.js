import "./App.css";
import React from "react";
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; 
import Question from "../components/Question";

class App extends React.Component {
  render(){
    return(
        <div className="App">
            <nav class="navbar navbar-light" className="black-nav">
              <div style={{color:"#000000",fontSize:'20px',  left:'264px', top:'31px', zIndex:'1'}}><strong>영화 장르 추천</strong></div>
              <hr style={{height:"5px", backgroundColor:"#E76464" ,border: "0"}}></hr>
          </nav>
        <Question/>
        </div>
    );
  }
}

export default App;
