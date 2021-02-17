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
  } 
  catch(e){
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
    const romancepost=this.state.posts.filter(post => post.genre.includes('로맨스'));

    const recommendMovie=
          romancepost.map(post=>
            <>
            <div className={styles.root}>
            
            {/* 이미지 경로를 src에 직접 쓰려면 public 폴더 아래(index.html과 동등하거나 하위 위치)에 있어야 함*/}

            <Paper elevation={3} style={{width:"30%",float:"left",height: "282px",margin:"12px"}} className={styles.paper}>
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
              return (
                <div>
                    {this.state.posts.map(item => (
                        <div key={item.id}>
                            <h1>{item.genre}</h1>
                            <span>{item.movie_name}</span>
                        </div>
                    ))}
                </div>
              );
  
            }
        
  }
}

export default Result;