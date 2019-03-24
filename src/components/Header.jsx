import React from "react";
import logo from './../logo.svg'

function Header(props) {
  return (
    <div className="the-header">
        <div className='side-headers'></div>
        <header>Movie Watchlist</header>
        <div className='side-headers made-possible'>
            Made Possible by:
            <img src={logo} className="App-logo" alt="logo" width='80' />
        </div>
    </div>
  );
}

export default Header;
