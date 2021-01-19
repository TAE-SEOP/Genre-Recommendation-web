import React from 'react';
import './App.css'; 
import {Radio} from 'antd';
import {Link, BrowserRouter as Router, BrowserRouter} from "react-router-dom"



class FirstQuestion extends React.Component {
    constructor(props){
        super(props);
        this.onChangeAns = this.onChangeAns.bind(this);
        this.state ={
            answer : 0
        }
    }

    onChangeAns = (e)=>{
        this.setState({answer:e.target.value})
        console.log("Answer : ",this.state.answer);
        this.props.onChange(e.target.value,1);
    }

    render(){
        return(
            <div>
                <h1>당신의 현재 기분은 어떤가요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>기쁨</Radio>
                   <Radio value={2}>그냥</Radio>
                   <Radio value={3}>슬픔</Radio>
                </Radio.Group>
                {
                this.props.firstAns !== 0 && <Link to= '/SecondQuestion'><button> 다음</button></Link>
                }

            </div>
        );

    }
}
export default FirstQuestion