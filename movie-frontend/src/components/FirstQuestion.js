import React, {Component} from 'react';
import '../pages/App.css'; 
import {Radio} from 'antd';
import SecondQuestion from './SecondQuestion';
import {Link, Rout, BrowserRouter as Router} from "react-router-dom"

class FirstQuestion extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            firstAns: 0,
            sceondAns: 0,
            thirdAns:0,
            fourthAns:0
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.question !== this.props.question;
    }

    // updateAnswer = (e, data) =>{
    //     const {question} = this.state;
    //     this.setState({
    //         question : question.map(
    //             ans => id === ans.id
    //             ? {...ans, ...}
    //             : ans
    //         )
    //     })
    // }


    render(){
        
        const onChange = (e)=> {
            this.setState({firstAns : e.target.value});
            console.log('First Answer', this.state.firstAns);
        };
        // const onChange = (e)=> {
        //     var tempArray = [...this.props.question];
        //     tempArray[0] = e.target.value;
        //     console.log('Quesiton 1', tempArray);
        //     this.setState({tempArray});
        // };
        return(
            <div>
                <h1>당신의 현재 기분은 어떤가요?</h1>
                <Radio.Group onChange={onChange}>
                   <Radio value={1}>기쁨</Radio>
                   <Radio value={2}>그냥</Radio>
                   <Radio value={3}>슬픔</Radio>
                </Radio.Group>
                <button>다음</button>
            </div>
        );

    }
}
export default FirstQuestion