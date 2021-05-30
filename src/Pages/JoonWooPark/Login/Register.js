import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputName: '',
      inputNickname: '',
      inputPassword: '',
      isDisabled: true,
    };
  }

  handleInput = e => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="JoonWooPark_Register">
        <main>
          <section className="register-container">
            <h3 className="register-title">Westagram</h3>
            <span>친구들의 사진과 동영상을 보려면 가입하세요.</span>
            <button className="register-button active">Google로 로그인</button>
            <div className="register-divide">
              <div className="register-divide-line-first"></div>
              <div className="register-divide-text">또는</div>
              <div className="register-divide-line-second"></div>
            </div>
            <input
              className="register-id"
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              name="inputId"
              autoFocus
              onChange={e => this.handleInput(e)}
            />
            <input
              className="register-name"
              type="text"
              placeholder="성명"
              name="inputName"
              onChange={e => this.handleInput(e)}
            />
            <input
              className="register-nickname"
              type="text"
              placeholder="사용자 이름"
              name="inputNickname"
              onChange={e => this.handleInput(e)}
            />
            <input
              className="register-password"
              type="password"
              placeholder="비밀번호"
              name="inputPassword"
              onChange={e => this.handleInput(e)}
              minLength="5"
            />

            <Link
              to="/main-joon"
              className={
                this.state.isDisabled ? 'link-button' : 'link-button active'
              }
            >
              <button
                className={
                  this.state.isDisabled
                    ? 'register-button'
                    : 'register-button active'
                }
              >
                가입
              </button>
            </Link>
          </section>
          <section className="login-container">
            <p>계정이 있으신가요?</p>
            <Link to="/register">로그인</Link>
          </section>
          <section className="mobile-download-container">
            <p>앱을 다운로드하세요.</p>
            <div className="download-container-icons">
              <img
                src="./images/JoonWooPark/download_at_apple.png"
                alt="app download at apple"
              />
              <img
                src="./images/JoonWooPark/download_at_google.png"
                alt="app download at google"
              />
            </div>
          </section>
          <footer>
            <ul className="footer-upper-deck">
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
            <div className="footer-lower-deck">
              <select>
                <option value="한국어">한국어</option>
                <option value="영어">영어</option>
                <option value="스페인어">스페인어</option>
              </select>
              <span> 2021 Westagram from Wecode</span>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default Register;
