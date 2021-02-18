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
     </div>    

    );
  }
}

export default Home;