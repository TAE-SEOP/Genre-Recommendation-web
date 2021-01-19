import React from 'react';
import './App.css'; 
import {Link, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import {Radio} from 'antd';

class SecondQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: 0
        }
    }     
    onChangeAns = (e)=> {
        this.setState({answer : e.target.value});
        this.props.onChange(e.target.value,2);
        console.log('Second Answer', this.state.secondAns);

    };
    render(){
    
        const secondAns = this.state.secondAns;
        return(
            <div>
                <h1>조금 더 구체적으로?</h1>
                <Radio.Group onChange={this.onChangeAns} value = {this.state.answer} >
                   <Radio value={4}>신남</Radio>
                   <Radio value={5}>편안함</Radio>
                   <Radio value={6}>괴롭다</Radio>
                </Radio.Group>
                {
                this.props.secondAns != 0 && <Link to= '/ThirdQuestion'><button> 다음</button></Link>
                }
            </div>
        );

    }
}

export default SecondQuestion;