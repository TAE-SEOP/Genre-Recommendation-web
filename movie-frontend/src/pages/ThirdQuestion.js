import React from 'react';
import '../pages/App.css'; 
import {Link, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import {Radio} from 'antd';
class ThirdQuestion extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            thirdAns: 0
        }
    }     
    onChange = (e)=> {
        this.setState({thirdAns : e.target.value});
        console.log('Third Answer', this.state.thirdAns);
    };
    render(){
        const thirdAns = this.state.thirdAns;
        return(
            <div>
                <h1>지금 감정을 유지하고 싶나요?</h1>
                <Radio.Group onChange={this.onChange}>
                   <Radio value={1}>네</Radio>
                   <Radio value={2}>아니오</Radio>
                </Radio.Group>
                <Link to= '/'><button> 다음</button></Link>
                

            </div>
        );

    }
}

export default ThirdQuestion;