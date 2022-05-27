import { Avatar, Button } from '@mui/material'
import React , {useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from "../../../firebase"
import "./TweetBox.css";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

   const sendTweet = (e) => {
      e.preventDefault();

      addDoc(collection(db, "post"),{
        displayName: "nagari",
        username: "nagari",
        verified: false,
        text: tweetMessage,
        avatar: "",
        image: tweetImage
      })
   };

   const handleImage = (eve) =>{
     console.log(eve)
     setTweetImage(eve)
   }

  const handleMessage = (eve) =>{
    console.log(eve)
    setTweetMessage(eve)
  }


  return (
    <div class="tweetBox">
      <form>
        <div className="tweetBox_input">
        <Avatar />
        <input placeholder="いまどうしてる？" type="text"
        onChange={(event)=>handleMessage(event.target.value)}
        ></input>
        </div>
        <input className="tweetBox_imageInput" placeholder='画像のURLを入力してください' type="text"
        onChange={(event)=>handleImage(event.target.value)}
        >
        </input>
        <Button className="tweetButton" type="submit"
        onClick={sendTweet}
        >ツイートする</Button>
      </form>
    </div>
  )
}
