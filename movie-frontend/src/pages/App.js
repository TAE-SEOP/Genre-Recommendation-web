import "./App.css";
import React from "react";
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; 
import SecondQuestion from "./SecondQuestion";
import FirstQuestion from "./FirstQuestion";
import ThirdQuestion from "./ThirdQuestion";
class App extends React.Component {
  render(){
    return(
        <div className="App">
         <div className="black-nav">
          <div style={{color:"white",fontSize:'30px'}}>영화 장르 추천</div>
         </div>
         <Router>
           <Switch>
            <Route exact path="/" component = {FirstQuestion}/>
            <Route exact path="/SecondQuestion" component ={SecondQuestion} />
            <Route exact path="/ThirdQuestion" component ={ThirdQuestion} />
           </Switch>
         </Router>
        </div>
    );
  }
}

export default App;
