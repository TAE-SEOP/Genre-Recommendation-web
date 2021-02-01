import "../pages/App.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button'

import imgfile0 from "../images/home.png"

class Home extends React.Component {
  render(){
    return(
      <>
        <div style={{marginTop:"50px", display:"block"}}>
            <img src={imgfile0} style={{width:"700px", height:"500px", marginBottom:"30px", borderRadius: "20px"}}></img>
            <br/>
            <p style={{fontSize:"15px"}}>이 테스트는 자신의 <strong>장르 선호도와 오늘 감정</strong> 등과 같이<br/> 사용자의 취향을 확인하고 찾아내 <strong>영화 장르 추천</strong>을 해주는 테스트입니다. </p>
            <p style={{fontSize:"15px"}}>총 12문항 구성으로 <strong>5분정도</strong> 소요됩니다.</p>
            <NavLink to ={{
                  pathname: "/Question"
              }}>
                <Button style={{width:"200px"}} variant="outline-danger">분석 시작</Button>
            </NavLink>
    
        </div>

        {/* <div>
            <hr style={{width:"90%"}}></hr>
            <article className="introduce">
              <div className="taeseop"><img className="img2" src={imgfile}></img></div>
              <div className="taeseop_t">
                <hr style={{width:"100%",height:"7px", backgroundColor:"#789467"}}></hr>
                <p style={{marginBottom:"100px"}}><strong>윤태섭</strong></p>
                <hr></hr>
              </div>
            </article>
            <div className="taeseop_i">현대인의 고독과 청춘의 방황을 선명하게 포착한 현대 한국 문학의 대표작<br/>영원한 젊음의 감성으로 전 세계 독자를 사로잡은 윤태섭<br />한 사람을 사랑한다는 것, 한 시대를 살아간다는 것에 대하여</div>
            <div style={{fontSize:"13px"}}>세상의 모서리
구부정하게 커버린
골칫거리 outsider
걸음걸이, 옷차림,
이어폰 너머 play list
음악까지 다 minor<br/>
넌 모르지
떨군 고개 위
환한 빛 조명이
어딜 비추는지
느려도 좋으니
결국 알게 되길
The one and only<br/>
You are my celebrity
잊지마 넌 흐린 어둠 사이
왼손으로 그린 별 하나
보이니 그 유일함이 얼마나
아름다운지 말야<br/>
You are my celebrity
celebrity
You are my celebrity
지쳐버린 표정 마치
전원을 꺼놓은 듯이
심장소린 too quiet<br/>
네가 가진 반짝거림,
상상력, identity
까지 모조리 diet
넌 모르지
아직 못다 핀
널 위해 쓰여진
오래된 사랑시<br/>
헤매도 좋으니
웃음 짓게 되길
The one and only
You are my celebrity
잊지마 넌 흐린 어둠 사이<br/>
왼손으로 그린 별 하나
보이니 그 유일함이 얼마나
아름다운지 말야
You are my celebrity
발자국마다 이어진 별자리<br/>
그 서투른 걸음이 새겨놓은 밑그림
오롯이 너를 만나러 가는 길
그리로 가면 돼 점선을 따라
잊지마 이 오랜 겨울 사이<br/>
언 틈으로 피울 꽃 하나
보이니 하루 뒤 봄이 얼마나
아름다울지 말야
You are my celebrity
celebrity
You are my celebrity</div>
        </div> */}
     </>    

    );
  }
}

export default Home;