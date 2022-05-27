import React from 'react'
import "./SiderbarOption.css";


function SidebarOptions({text, Icon}) {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h2>{text}</h2>

    </div>
  )
}

export default SidebarOptions;
