import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <nav>
          <section class="title-container">
            <h3>Westagram</h3>
          </section>
          <section class="search-container">
            <input type="text" class="search-bar" placeholder="검색" />
            <div class="search-result-triangle"></div>
            <section class="search-result"></section>
          </section>
          <section class="nav-button-container">
            <i class="fas fa-home"></i>
            <i class="far fa-paper-plane"></i>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <section class="nav-personal-menu-container">
              <span class="nav-button-profile"></span>
              <div class="personal-menu-triangle"></div>
              <article class="personal-menu">
                <div class="menu-profile">
                  <i class="far fa-user-circle"></i>
                  <span>프로필</span>
                </div>
                <div class="menu-bookmark">
                  <i class="far fa-bookmark"></i>
                  <span>북마크</span>
                </div>
                <div class="menu-setting">
                  <i class="fas fa-cog"></i>
                  <span>설정</span>
                </div>
                <div class="menu-convert">
                  <i class="fas fa-exchange-alt"></i>
                  <span>계정 전환</span>
                </div>
                <div class="menu-logout">
                  <i class="fas fa-sign-out-alt"></i>
                  <span>로그아웃</span>
                </div>
              </article>
            </section>
          </section>
        </nav>
        <main>
          <section class="left-container">
            <div class="story-container"></div>
            <div class="feeds-container">
              <section class="feed-personal-info">
                <span class="personal-photo"></span>
                <span class="personal-id">front_devpark</span>
              </section>
              <section class="feed-photo-container">
                <img
                  alt="feed"
                  src="/images/JoonWooPark/feeds/jeju_blossom.jpeg"
                  class="feed-photo"
                />
              </section>
              <section class="feed-activity">
                <article class="activity-icons">
                  <i class="far fa-heart"></i>
                  <i class="far fa-comment"></i>
                  <i class="far fa-paper-plane"></i>
                  <i class="far fa-bookmark"></i>
                </article>
                <article class="activity-good-number">좋아요 12개</article>
                <article class="activity-info">
                  <span class="info-personal-id">front_devpark</span>
                  <span class="info-personal-content">제주도 유채꽃 벚꽃</span>
                </article>
                <ul class="comment-list"></ul>
                <article class="activity-time">11시간 전</article>
              </section>
              <section class="input-container">
                <i class="far fa-grin"></i>
                <input
                  type="text"
                  class="input-comment"
                  placeholder="댓글 달기..."
                />
                <span class="input-submit">게시</span>
              </section>
            </div>
          </section>
          <aside class="right-container">
            <section class="login-user-container">
              <span class="user-picture">
                <img alt="user profile" src="/images/JoonWooPark/profile.png" />
              </span>
              <span class="user-nickname">front_devpark</span>
              <a href="/" class="user-convert">
                전환
              </a>
            </section>
            <section class="user-recommend-container">
              <header>
                <h3>회원님을 위한 추천</h3>
                <span>모두 보기</span>
              </header>
            </section>
            <footer>
              <ul class="footer-upper-deck">
                <li>소개</li>
                <li>블로그</li>
                <li>채용 정보</li>
                <li>도움말</li>
                <li>API</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>인기 계정</li>
                <li>해시태그</li>
                <li>위치</li>
              </ul>
              <div class="footer-lower-deck">
                <span> 2021 Westagram from Wecode</span>
              </div>
            </footer>
          </aside>
        </main>
      </>
    );
  }
}

export default Main;
