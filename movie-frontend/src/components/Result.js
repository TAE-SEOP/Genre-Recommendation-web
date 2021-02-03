import "../pages/App.css";
import React from "react";
import imgfile0 from "../images/hear.jpg"
import imgfile1 from '../images/about.jpg'
import imgfile2 from '../images/love.jpg'
import imgfile3 from '../images/note.jpg'
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Box} from '@material-ui/core';
class Result extends React.Component {
 constructor(props){
   super(props);
   this.state = {
      genre :[
              {'id':1, 'name': '액션'},{'id':2, 'name': 'SF'},
              {'id':3, 'name': '코미디'},{'id':4, 'name': '스릴러'},
              {'id':5, 'name': '전쟁'},{'id':6, 'name': '스포츠'},
              {'id':7, 'name': '판타지'},{'id':8, 'name': '음악'},
              {'id':9, 'name': '로멘스'}
            ],
      genreExample :[
              {'id':1,'example1':'악인전','example2' : '분노의 질주: 홉스&쇼', 'example3':'존 윅3'},
              {'id':2,'example1':'레디 플레이어 원','example2' : '베놈', 'example3':'엑스 마키나'},
              {'id':3,'example1':'클라우드','example2' : '나쁜 녀석들 3', 'example3':'엑시트'},
              {'id':4,'example1':'인비저블맨','example2' : '서치', 'example3':'제인 도'},
              {'id':5,'example1':'퓨리어스','example2' : '1917', 'example3':'태극기 휘날리며'},
              {'id':6,'example1':'블라인드 사이드','example2' : '42', 'example3':'머니볼'},
              {'id':7,'example1':'헝거 게임: 모킹제이','example2' : '나니아 연대기-사자,마녀 그리고 옷장', 'example3':'트와일라잇'},
              {'id':8,'example1':'코코','example2' : '비긴 어게인', 'example3':'라라랜드'},
              {'id':9,'example1':'어바웃타임','example2' : '러브 액츄얼리', 'example3':'노트북'}
      ]
   }
 }
  render(){
    const styles = theme => ({
      root:{

        flexWrap:'wrap',  
        background:'#eeeeee',
        margin:'10px auto',
      },
        paper:{
          width: '100px',
          height: '150px',
          color: theme.palette.text.primary,
      },
    });

    return(
    
        <div className="result">
          <div className="recommendG">
            <h3 style={{fontSize:"20px"}}>
              <strong>오늘은 {this.state.genre[3].name} 장르를 추천합니다.</strong>
            </h3>
           
            <img src={imgfile0} class="img_heart"></img>
           
          </div>

          <div className="recommendM">
            <h3 style={{fontSize:"20px"}}>
              <strong>이런 영화는 어떠세요?</strong>
            </h3>

            
            <div className={styles.root}> 
          
              <Paper elevation ={3} variant="outlined" className={styles.paper} >
                <Grid container spacing={16}>
                  <Grid item xs={4}>
                    <img src={imgfile1} class="img"></img><a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92075" style={{fontSize:"15px",color:"black"}}><strong>어바웃타임</strong></a>
                  </Grid>
                  <Grid item xs={4}>
                  <img src={imgfile2} class="img"></img><a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92075" style={{fontSize:"15px", color:"black"}}><strong>러브 액츄얼리</strong></a>
                  </Grid>
                  <Grid item xs={4}>
                  <img src={imgfile3} class="img"></img><a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92075" style={{fontSize:"15px", color:"black"}}><strong>노트북</strong></a>
                  </Grid>
                </Grid>
              </Paper>

            </div>
          </div>

          <NavLink to ={{
                  pathname: "/"
              }}>
                <Button style={{width:"200px",marginTop:"50px"}} variant="outline-danger">다시 하기</Button>
            </NavLink>

        </div>

    );
  }
}

export default Result;