import React from 'react';
import '../pages/App.css'; 
import {Link, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import {Radio} from 'antd';

class SecondQuestion extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            secondAns: 0
        }
    }     
    onChange = (e)=> {
        this.setState({secondAns : e.target.value});
        console.log('Second Answer', this.state.secondAns);
    };
    render(){
    
        const secondAns = this.state.secondAns;
        return(
            <div>
                <h1>조금 더 구체적으로?</h1>
                <Radio.Group onChange={this.onChange} value = {secondAns} >
                   <Radio value={4}>신남</Radio>
                   <Radio value={5}>편안함</Radio>
                   <Radio value={6}>괴롭다</Radio>
                </Radio.Group>
                <Link to= '/ThirdQuestion'><button> 다음</button></Link>
            </div>
        );

    }
}

export default SecondQuestion;