import React from 'react';
import Nav from '../../../Components/Nav';
import CommentList from '../Components/CommentList';
import RecommendUser from '../Components/RecommendUser';
import StoryList from '../Components/StoryList';
import jsonData from '../data.json';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      currentUser: '',
      inputComment: '',
      userData: [],
    };
  }

  componentDidMount() {
    this.addData();
  }

  addData = () => {
    this.setState({ userData: jsonData });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyDown = e => {
    if (e.code === 'Enter') {
      this.addComment();
      e.target.value = '';
    }
  };

  addComment = () => {
    const { inputComment, commentList } = this.state;
    const input = document.querySelector('.input-comment');

    if (!inputComment) {
      return;
    } else {
      const addCommentToList = commentList.concat(inputComment);
      this.setState({ commentList: addCommentToList });
      input.value = '';
    }
  };

  render() {
    return (
      <div className="ParkJoonWoo">
        <Nav />
        <main>
          <section className="left-container">
            <div className="story-container">
              {this.state.userData.length > 0 && (
                <StoryList userData={this.state.userData} />
              )}
            </div>
            <div className="feeds-container">
              <section className="feed-personal-info">
                <span className="personal-photo"></span>
                <span className="personal-id">front_devpark</span>
              </section>
              <section className="feed-photo-container">
                <img
                  alt="feed"
                  src="/images/JoonWooPark/feeds/jeju_blossom.jpeg"
                  className="feed-photo"
                />
              </section>
              <section className="feed-activity">
                <article className="activity-icons">
                  <img alt="heart" src="/Images/nav/heart.svg" />
                  <i className="far fa-comment"></i>
                  <i className="far fa-paper-plane"></i>
                  <i className="far fa-bookmark"></i>
                </article>
                <article className="activity-good-number">????????? 12???</article>
                <article className="activity-info">
                  <span className="info-personal-id">front_devpark</span>
                  <span className="info-personal-content">
                    ????????? ????????? ??????
                  </span>
                </article>
                <ul className="comment-list">
                  {this.state.commentList && (
                    <CommentList commentList={this.state.commentList} />
                  )}
                </ul>
                <article className="activity-time">11?????? ???</article>
              </section>
              <section className="input-container">
                <i className="far fa-grin"></i>
                <input
                  type="text"
                  className="input-comment"
                  placeholder="?????? ??????..."
                  name="inputComment"
                  onChange={e => this.handleInput(e)}
                  onKeyDown={e => this.handleKeyDown(e)}
                />
                <span
                  className="input-submit"
                  onClick={() => this.addComment()}
                >
                  ??????
                </span>
              </section>
            </div>
          </section>
          <aside className="right-container">
            <section className="login-user-container">
              <span className="user-picture">
                <img alt="user profile" src="/images/JoonWooPark/profile.png" />
              </span>
              <span className="user-nickname">front_devpark</span>
              <a href="/" className="user-convert">
                ??????
              </a>
            </section>
            <section className="user-recommend-container">
              <article>
                <h3>???????????? ?????? ??????</h3>
                <span>?????? ??????</span>
              </article>
              {this.state.userData.length > 0 && (
                <RecommendUser userData={this.state.userData} />
              )}
            </section>
            <footer>
              <ul className="footer-upper-deck">
                <li>??????</li>
                <li>?????????</li>
                <li>?????? ??????</li>
                <li>?????????</li>
                <li>API</li>
                <li>????????????????????????</li>
                <li>??????</li>
                <li>?????? ??????</li>
                <li>????????????</li>
                <li>??????</li>
              </ul>
              <div className="footer-lower-deck">
                <span> 2021 Westagram from Wecode</span>
              </div>
            </footer>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
