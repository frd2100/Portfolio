import React from 'react';
import './MyWork.css';
import theme_pattern from "../../assets/theme_pattern.svg";


function MyWork() {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
    </div>
  )
}

export default MyWork