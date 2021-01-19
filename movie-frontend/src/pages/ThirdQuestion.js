import React from 'react';
import './App.css'; 
import {Link, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import {Radio} from 'antd';
class ThirdQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: 0
        }
    }       
    onChangeAns = (e)=> {
        this.setState({answer : e.target.value});
        this.props.onChange(e.target.value,3);
        console.log('Third Answer', this.state.thirdAns);

    };
    render(){
        const thirdAns = this.state.thirdAns;
        return(
            <div>
                <h1>지금 감정을 유지하고 싶나요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>네</Radio>
                   <Radio value={2}>아니오</Radio>
                </Radio.Group>
                {
                this.props.thirdAns != 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default ThirdQuestion;