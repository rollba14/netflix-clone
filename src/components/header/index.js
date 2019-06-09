import React from 'react';
import {AppBar,Toolbar,Button,Icons} from '../'
import './style.styl'

function Header() {
  return (
    <div className="App-header">
      <AppBar>
        <Toolbar>
            <img className="logo" src={"https://i.ytimg.com/vi/Xfv0j9_zuN0/maxresdefault.jpg"} alt="Netflix Logo"/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
