import React, {useState, useEffect} from 'react'
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from "../../../firebase";
import {collection, getDocs} from "firebase/firestore";


export default function Timeline() {

  const  [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    const postData = collection(db, "post");
  getDocs(postData).then((querySnapshot)=>{
     querySnapshot.docs.map((doc)=>{
          setPosts.push(doc.data())
     })
  })
  console.log("aaa")
  },[posts]);

  return (
    <div className='timeline'>
     <div className="timeline_header"></div> 
     <h2>ホーム</h2>
     <TweetBox />
     {console.log(posts)}
     {posts.map((post)=>{
      <Post displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
      />
     })}
     
    </div>
  )
}
