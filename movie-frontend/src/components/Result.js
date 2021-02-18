import "../pages/App.css";
import React from "react";
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

// 커밋 테스트22
class Result extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        posts: []
      };
}

async componentDidMount() {
  try{
    const res= await fetch("api/movie/map_main");
    const posts = await res.json();
    this.setState({
      posts
    });
  } catch(e){
      console.log(e);
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

    const {posts}=this.state;
    
    
    console.log(this.props.userAnswer[0].result)
    console.log(this.props.userAnswer[1].result)
    console.log(this.props.userAnswer[2].result)
    var decisionGenre;
    if(this.props.userAnswer[0].result == 1 && this.props.userAnswer[2].result == 2){
        decisionGenre = "전쟁";
    }else if(this.props.userAnswer[0].result ==2 && this.props.userAnswer[2].result == 2){  
        decisionGenre = "로멘스";
    }else if(this.props.userAnswer[0].result == 3 && this.props.userAnswer[2].result == 2){
        decisionGenre = "코미디";
    }else if(this.props.userAnswer[3].result == 2){
      decisionGenre = "액션";
    }else if(this.props.userAnswer[4].result == 1 ){
      decisionGenre = "음악";
    }else if(this.props.userAnswer[5].result == 2 || this.props.userAnswer[7].result == 1 ){
      decisionGenre = "SF";
    }else if(this.props.userAnswer[6].result == 2 || this.props.userAnswer[7].result == 2){
      decisionGenre = "판타지";
    }else if(this.props.userAnswer[8].result == 1){
      decisionGenre = "스포츠";
    }else if(this.props.userAnswer[9].result == 1){
      decisionGenre = "스릴러";
    }else if(this.props.userAnswer[10].result == 2){
      decisionGenre = "전쟁";
    }else if(this.props.userAnswer[11].result == 1){
      decisionGenre = "음악";
    }else decisionGenre = "코미디";


    console.log(this.props.userAnswer);
    console.log(decisionGenre);
    const recommendpost=this.state.posts.filter(post => post.genre.includes(decisionGenre));
    
    console.log(recommendpost);


    const recommendMovie=
          recommendpost.map(post=>
            <>
            <div className={styles.root}>
            
            {/* 이미지 경로를 src에 직접 쓰려면 public 폴더 아래(index.html과 동등하거나 하위 위치)에 있어야 함*/}

            <Paper elevation={3} style={{width:"30%",float:"left",height: "682px",margin:"12px"}} className={styles.paper}>
              <img src={post.img_url} class="img"></img><a href={posts[0].movie_url} style={{fontSize:"15px",color:"black"}}><strong>{post.movie_name}</strong></a>
            </Paper>

            </div>
            </>
            )

    if(!posts[0]){
        return(
          <div>still waiting</div>
        );
      }

    else{
      return(
        <div className="result">
          <div className="recommendG">
            <h3 style={{fontSize:"20px"}}>
              <strong>오늘은 {recommendpost[0].genre} 장르를 추천합니다.</strong>
            </h3>
          
            <img src="/images/hear.jpg" class="img_heart"></img>
          
            
          </div>
          <div className="recommendM">
            <h3 style={{fontSize:"20px"}}>
                <strong>이런 영화는 어떠세요?</strong>
            </h3>
            {recommendMovie}
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
}

export default Result;