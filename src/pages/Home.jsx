import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import '../styles/Home.css'
import googleImg from '../images/google.png';
import Search from './Search';

function Home() {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="homeHeaderRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar/>
        </div>
      </div>
      <div className="homeBody">
        <img src={googleImg} alt="pic" />
        <div className="homeInputContainer">
            <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;
