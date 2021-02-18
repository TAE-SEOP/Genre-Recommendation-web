import React from 'react';
import {Link, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import {Radio} from 'antd';
import {Button} from 'react-bootstrap'


class QuestionPage extends React.Component{
    constructor(props){
    super(props);
    this.sliceEmotion = this.sliceEmotion.bind(this);
    this.onChangeAns = this.onChangeAns.bind(this);
    this.state={
        answer : 0,
        nextpage :['/','/Question-2','/Question-3','/Question-4','/Question-5','/Question-6',
        '/Question-7','/Question-8','/Question-9','/Question-10','/Question-11','/Question-12','/Result']
        }
        
    }
    onChangeAns = (e)=>{
        
        this.setState({answer:e.target.value})
        console.log("questionarray id :", this.props.questionArray.id);
        this.props.onChange(e.target.value,this.props.questionArray.id);

    } 


    sliceEmotion = (firstans,emotions)=>{
        var start =0, end =0;
        // console.log("first : ",firstans);
        // console.log("[0]", emotions[0]);

        if(firstans == 1) { start = 0; end= 5; }
        else if(firstans == 2)  {start = 5; end =12;}
        else if(firstans == 3) {start = 12; end =18;}
        //const emotion = emotions.filter(emo => emo.id < start && emo.id > end);
        const emotion = emotions.slice(start,end);
        console.log('List : ', emotion);
        
        return emotion;
    }
    render(){
        if(this.props.questionArray.id == 2) {
            var EmotionList = [
                {id:1, emotion: '신남'},
                {id:2, emotion: '설렘'},
                {id:3, emotion: '편안함'},
                {id:4, emotion: '만족함'},
                {id:5, emotion: '활기참'},
                {id:6, emotion: '귀찮음'},
                {id:7, emotion: '지루함'},
                {id:8, emotion: '편안함'},
                {id:9, emotion: '홀가분'},
                {id:10, emotion: '힐링'},
                {id:11, emotion: '심심'},
                {id:12, emotion: '그리움'},
                {id:13, emotion: '서러움'},
                {id:14, emotion: '외로움'},
                {id:15, emotion: '우울함'},
                {id:16, emotion: '막막함'},
                {id:17, emotion: '속상함'},
                {id:18, emotion: '괴로움'},
            ]            
            var sliceemotion = this.sliceEmotion(this.props.firstAns,EmotionList);
        }
            const secondAns = this.state.secondAns;
            const buttonStyle={
                width:400,
                height:100,
                margin:10, 
                fontSize:15,
                borderRadius: 20
            }
            return(
                <div className="question">
                    <p style={{fontSize:"20px"}}>Question {this.props.questionArray.id}.</p>
                    <p><strong>{this.props.questionArray.question}</strong> </p>
                    {
                        this.props.questionArray.id !== 2 &&
                        <Link to= {this.state.nextpage[this.props.questionArray.id]}>
                            
                                {this.props.choiceList.map((m,index)=>(<h2><Button variant ="outline-danger" style={buttonStyle} onClick={this.onChangeAns}  value = {index+1}  key ={index}> {m} </Button></h2>))}
                            
                        </Link>
                    } 
                    {
                        this.props.questionArray.id == 2 &&
                        <Link to= {this.state.nextpage[this.props.questionArray.id]}>
                            
                                {sliceemotion.map((m,index)=>(<h2><Button variant ="outline-danger" style={buttonStyle} value={m.id} onClick={this.onChangeAns} key ={index}> {m.emotion} </Button></h2>))}
                            
                        </Link>
                    }      
                      
                </div>
        );
    }
}

export default QuestionPage