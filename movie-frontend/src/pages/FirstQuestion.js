import React from 'react';
import '../pages/App.css'; 
import {Radio} from 'antd';
import {Link, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"



class FirstQuestion extends React.Component {
    constructor(props){
        super(props); 
        this.onChange =this.onChange.bind(this);
        this.state = {
            firstAns: 0
        }
    }
 
    onChange = (e)=> {
        this.setState({firstAns : e.target.value});
        console.log('First Answer', this.state.firstAns);
    };

    render(){
       
        const firstAns = this.state.firstAns;
        return(
            
            <div>
                <h1>당신의 현재 기분은 어떤가요?</h1>
                <Radio.Group onChange={this.onChange} value ={firstAns}>
                   <Radio value={1}>기쁨</Radio>
                   <Radio value={2}>그냥</Radio>
                   <Radio value={3}>슬픔</Radio>
                </Radio.Group>
                <Link to= '/SecondQuestion'><button> 다음</button></Link>
                

            </div>
        );

    }
}
export default FirstQuestion