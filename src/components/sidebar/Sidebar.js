import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar"> 
    <TwitterIcon className="sidebar--twitterIcon" />
    <SidebarOptions text="ホーム" Icon={HomeIcon} />
    <SidebarOptions text="話題を検索" Icon={SearchIcon} />
    <SidebarOptions text="通知" Icon={NotificationsNoneIcon} />
    <SidebarOptions text="メッセージ" Icon={MailOutlineIcon} />
    <SidebarOptions text="ブックマーク" Icon={BookmarkBorderIcon} />
    <SidebarOptions text="リスト" Icon={ListAltIcon} />
    <SidebarOptions text="プロフィール" Icon={PermIdentityIcon} />
    <SidebarOptions text="もっと見る" Icon={MoreHorizIcon} />
    <Button variant="outlined" className="tweetButton" fullWidth>ツイートする</Button>
    </div>
  )
}
