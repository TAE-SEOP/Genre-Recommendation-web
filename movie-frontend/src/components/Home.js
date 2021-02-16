import "../pages/App.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
  render(){
    return(
      <div className="App">
        <div style={{marginTop:"50px", display:"block"}}>
            <img src="/images/home.png" style={{width:"700px", height:"500px", marginBottom:"30px", borderRadius: "20px"}}></img>
            <h3 style={{fontSize:"30px"}}>
              <strong>안녕하세요, 윤태섭입니다.</strong>
            </h3>
            <br/>
            <p style={{fontSize:"15px"}}>이 테스트는 자신의 <strong>장르 선호도와 오늘 감정</strong> 등과 같이<br/> 사용자의 취향을 확인하고 찾아내 <strong>영화 장르 추천</strong>을 해주는 테스트입니다. </p>
            <p style={{fontSize:"15px"}}>총 12문항 구성으로 <strong>5분정도</strong> 소요됩니다.</p>
            <NavLink to ={{
                  pathname: "/Question"
              }}>
                <Button style={{width:"200px"}} variant="outline-danger">분석 시작</Button>
            </NavLink>
    
        </div>

        <div>
            <article className="introduce">
              <div className="taeseop"><img className="img2" src="/images/taeseop.jpg"></img></div>
              <div className="taeseop_t">
                <hr style={{width:"100%",height:"7px", backgroundColor:"#FAD2D2"}}></hr>
                <p style={{marginBottom:"10px"}}><strong>윤태섭</strong></p>
                <div style={{ fontSize: "13px", color:"#bcbcbc"}}>아주대학교 개발자 2016.02~<br/>태성고등학교 2013.02~2016.01<br/>태성중학교 2010.02~2013.01</div>
                <hr></hr>
              </div>
            </article>
            
        </div>
     </div>    

    );
  }
}

export default Home;