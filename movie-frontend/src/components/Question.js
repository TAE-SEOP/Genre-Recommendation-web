import { Alert } from 'antd';
import "../pages/App.css";
import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; 
import FirstQuestion from '../pages/FirstQuestion';
import SecondQuestion from '../pages/SecondQuestion';
import ThirdQuestion from '../pages/ThirdQuestion';

class Question extends React.Component{
    constructor(props){
        super(props);
        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.state = {
            firstAns : 0,
            secondAns : 0,
            thirdAns : 0,
            fourthAns : 0
        }
    }
    onChangeFirst = (answer,number) => {
        if(number == 1){
            console.log('First Answer');
            this.setState({firstAns : answer});
            console.log('First Answer', this.state.firstAns);
        }
        else if(number == 2){
            console.log('Second Answer');
            this.setState({secondAns : answer});
            console.log('Second Answer', this.state.secondAns);
        }
        else if(number == 3){
            console.log('Third Answer');
            this.setState({thirdAns : answer});
            console.log('Third Answer', this.state.thirdAns);
        }
    }

    render(){
        return(
            <div>
                  <div className="black-nav">
          <div style={{color:"white",fontSize:'30px'}}>영화 장르 추천</div>
         </div>
         <Router>
           <Switch>
            <Route exact path="/" render={()=> <FirstQuestion firstAns = {this.state.firstAns} onChange = {this.onChangeFirst}/>}/>
            <Route exact path="/SecondQuestion" render={()=><SecondQuestion secondAns={this.state.secondAns} onChange ={this.onChangeFirst}/> }/>
            <Route exact path="/ThirdQuestion" render={()=><ThirdQuestion thirdAns={this.state.thirdAns} onChange={this.onChangeFirst}/>} />
           </Switch>
         </Router>
         </div>
        );                            
    }
}

export default Question;