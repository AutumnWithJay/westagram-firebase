import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navContainer">
        <div className="navWrapper">
          <div className="mainLogo">
            <span>westagram</span>
          </div>
          <div className="searchWrapper">
            <input className="search" type="text" placeholder="검색" />
            <span>
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="iconWrapper">
            <img alt="Home" src="/Images/nav/Home.svg" />
            <img alt="share" src="/Images/nav/share.svg" />
            <img alt="navigate" src="/Images/nav/nav.svg" />
            <img alt="heart" src="/Images/nav/heart.svg" />
            <img
              className="myProfile"
              alt="profile"
              src="/Images/nav/me.jpeg"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
