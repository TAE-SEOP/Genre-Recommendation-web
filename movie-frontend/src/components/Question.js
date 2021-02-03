import { Alert } from 'antd';
import "../pages/App.css";
import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"; 
// import FirstQuestion from '../pages/FirstQuestion';
// import SecondQuestion from '../pages/SecondQuestion';
// import ThirdQuestion from '../pages/ThirdQuestion';
import QuestionPage from '../pages/QuestionPage';
import Home from './Home';
import Result from './Result';

class Question extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            userAnswer : [
                {'id' : 1, 'result' : 0 },{'id' : 2, 'result' : 0 },
                {'id' : 3, 'result' : 0 },{'id' : 4, 'result' : 0 },
                {'id' : 5, 'result' : 0 },{'id' : 6, 'result' : 0 },
                {'id' : 7, 'result' : 0 },{'id' : 8, 'result' : 0 },
                {'id' : 9, 'result' : 0 },{'id' : 10, 'result' : 0 },
             {'id' : 11, 'result' : 0 },{'id' : 12, 'result' : 0 }],
            questionArray :[
                {'id' : 1, 'question' : '당신의 지금 기분은 어떤가요?' },
                {'id' : 2, 'question' : '조금 더 구체적으로?' },
                {'id' : 3, 'question' : '지금 기분을 유지하고 싶나요?' },
                {'id' : 4, 'question' : '청소년때 학교에서 해당 과목 관련 영화를 보여주면 당신은 어떻게 행동했나요?'},
                {'id' : 5, 'question' : '평소 영화, 드라마, 책의 내용에 대해 당신의 반응은 어떤가요?' },
                {'id' : 6, 'question' : '평소 영화를 볼 때 더 중요하게 생각하는 것은 어떤 것인가요?' },
                {'id' : 7, 'question' : '영화를 보고 난 후 주로 어떻게 행동하나요?' },
                {'id' : 8, 'question' : '둘 중 어떤 종류의 캐릭터를 더 좋아하시나요?' },
                {'id' : 9, 'question' : '열린 결말의 영화를 보고나서 당신은 어떤 생각을 하나요?' },
                {'id' : 10, 'question' : '일이 많았던 오늘, 하루를 영화를 보면서 마무리하고싶은데 어떻게 영화를 볼까요?' },
                {'id' : 11, 'question' : '복잡하고 다양한 해석이 존재하는 영화를 보고나서 당신은 어떤 생각을하나요?' },
                {'id' : 12, 'question' : '영화가 어땠냐고 물어보는 친구한테 어떤 식으로 설명할 것인가요?' }] ,
            selectList : [ 
                {'id' : 1, 'choice' : ['기쁨', '그냥', '슬픔']},
                {'id' : 3, 'choice' : ['네','아니오'] },
                {'id' : 4, 'choice' : ['지루한 내용이더라도 흥미있게 보는 편이었다.','지루하면 보지 않고 바로 딴 짓을 하거나 잠을 잔다.']},
                {'id' : 5, 'choice' : ['주인공이나 특정 인물에 감정이입을 많이 하는 편이다.','주인공이나 특정 인물의 감정에 공감은 하지만 별개이며 허구의 이야기임을 확실히 자각하면서 본다.']},
                {'id' : 6, 'choice' : ['좋은 스토리와 대사','화려하고 세련된 영상미'] },
                {'id' : 7, 'choice' : ['영화의 내용이나 결말에 대해 생각하면서 곱씹어본다.','간단히 재밌었다, 재미없었다 정도만 생각하고 넘긴다.'] },
                {'id' : 8, 'choice' : ['무조건 만능, 제일 강한 캐릭터','갖은 고난을 겪고 힘겹게 극복하는 대기만성형 캐릭터'] },
                {'id' : 9, 'choice' : ['아 뭔가 찜찜한데... 그냥 결말을 정해주지...','내가 원하는대로 그냥 생각해야지~'] },
                {'id' : 10, 'choice' : ['영화관에서 본다.','집에서 본다.'] },
                {'id' : 11, 'choice' : ['영화는 머리 식힐려고 보는 것이기때문에 재밌게 보지 못했다.','다양한 해석에 신기해하고 흥미롭게 본다.'] },
                {'id' : 12, 'choice' : ['내가 느낀 감정을 주 이야기로 말한다.','스토리를 설명한다.'] }] 
        }
    }
    onChange = (answer,number) => {
        const {userAnswer} = this.state;
            // console.log('1 number :', number);
            // console.log('2 answer :', answer);
            this.setState({
                userAnswer : userAnswer.map( 
                    ans => ans.id === number
                        ? ({...ans, result : answer})
                        : ans)})
            console.log('user Answer:', this.state.userAnswer[number-1].result);
        
    }

    render(){
        return(
            <div className="App">
         <Router>
           <Switch>
            {/* <Route exact path="/" render={()=> <FirstQuestion firstAns = {this.state.userAnswer[0].result} onChange = {this.onChange}/>}/>
            <Route exact path="/SecondQuestion" render={()=><SecondQuestion firstAns = {this.state.userAnswer[0].result} secondAns={this.state.userAnswer[1].result} onChange ={this.onChange}/> }/>
            <Route exact path="/ThirdQuestion" render={()=><ThirdQuestion thirdAns={this.state.userAnswer[2].result} onChange={this.onChange}/>} /> */}
            <Route exact path='/' render={()=> <Home/>}/>
            <Route exact path='/Result' render={()=> <Result/>}/>
            <Route exact path='/Question' render={()=> <QuestionPage  questionArray = {this.state.questionArray[0]} answer = {this.state.userAnswer[0].result} choiceList = {this.state.selectList[0].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-2' render={()=> <QuestionPage questionArray = {this.state.questionArray[1]} firstAns = {this.state.userAnswer[0].result} answer={this.state.userAnswer[1].result} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-3' render={()=> <QuestionPage questionArray = {this.state.questionArray[2]} answer = {this.state.userAnswer[2].result} choiceList = {this.state.selectList[1].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-4' render={()=> <QuestionPage questionArray = {this.state.questionArray[3]} answer = {this.state.userAnswer[3].result} choiceList = {this.state.selectList[2].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-5' render={()=> <QuestionPage questionArray = {this.state.questionArray[4]} answer = {this.state.userAnswer[4].result} choiceList = {this.state.selectList[3].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-6' render={()=> <QuestionPage questionArray = {this.state.questionArray[5]} answer = {this.state.userAnswer[5].result} choiceList = {this.state.selectList[4].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-7' render={()=> <QuestionPage questionArray = {this.state.questionArray[6]} answer = {this.state.userAnswer[6].result} choiceList = {this.state.selectList[5].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-8' render={()=> <QuestionPage questionArray = {this.state.questionArray[7]} answer = {this.state.userAnswer[7].result} choiceList = {this.state.selectList[6].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-9' render={()=> <QuestionPage questionArray = {this.state.questionArray[8]} answer = {this.state.userAnswer[8].result} choiceList = {this.state.selectList[7].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-10' render={()=> <QuestionPage questionArray = {this.state.questionArray[9]} answer = {this.state.userAnswer[9].result} choiceList = {this.state.selectList[8].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-11' render={()=> <QuestionPage questionArray = {this.state.questionArray[10]} answer = {this.state.userAnswer[10].result} choiceList = {this.state.selectList[9].choice} onChange = {this.onChange}/>}/>
            <Route exact path='/Question-12' render={()=> <QuestionPage questionArray = {this.state.questionArray[11]} answer = {this.state.userAnswer[11].result} choiceList = {this.state.selectList[10].choice} onChange = {this.onChange}/>}/>
           </Switch>
         </Router>
         </div>
        );                            
    }
}

export default Question;