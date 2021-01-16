
import './App.css';
import React, {useState} from 'react';
import {Component} from 'react';
import {Radio} from 'antd';
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 


class App extends React.Component {
  constructor(props){   // render()보다 먼저 실행하여 초기화를 담당한다.
    super(props);
    this.state={
      question: [0,0,0,0]
    }
  }
  render(){
    return (
      <div className="App">
       <div className="black-nav">
         <div style={{color:"white",fontSize:'30px'}}>영화 장르 추천</div>
       </div>
       <FirstQuestion
        question = {this.state.question}>
       </FirstQuestion> 
      </div>
    );
  }  
}

export default App;
