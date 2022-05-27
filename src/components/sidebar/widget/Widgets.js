import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

export default function Widgets() {
  return (
    <div className="widgrts">
      <div className="widgets_input">
        <Search className="widgts_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets_container">
       <h2>今どうしてる？</h2>
         <TwitterTweetEmbed tweetId={"1524644801517604865"}/>

         <TwitterTimelineEmbed 
         sourceType="profile"
         screenName="Shin_Engineer"
         options={{height:400}}
         />

         
      </div>
    </div>
  )
}
