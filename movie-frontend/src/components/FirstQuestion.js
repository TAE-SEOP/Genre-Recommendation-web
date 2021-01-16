import React, {Component} from 'react';
import '../pages/App.css'; 
import {Radio} from 'antd';

class FirstQuestion extends React.Component {
    constructor(props){
        super(props); 
        this.state={
            firstchange: this.props.question
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.question !== this.props.question;
    }
    render(){
        console.log('Quesiton 1', this.state.firstchange);
        const onChange = (e)=> {
        var tempArray = [...this.state.firstchange];
        tempArray[0] = e.target.value;
        console.log('Quesiton 1', tempArray);
        this.setState(tempArray);
  };
        return(
            <div>
                <h1>당신의 현재 기분은 어떤가요?</h1>
                <Radio.Group onChange={onChange} value={this.state.firstchange[0]}>
                   <Radio value={0}>기쁨</Radio>
                   <Radio value={2}>그냥</Radio>
                   <Radio value={3}>슬픔</Radio>
                </Radio.Group>
                <button>다음</button>
            </div>
        );

    }
}
export default FirstQuestion