import React from 'react';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { commentList } = this.props;
    return commentList.map((data, index) => {
      return (
        <li key={index}>
          <span className="commentor-id">WRITER</span>
          <span className="comment-content">{data}</span>
          <button className="comment-like-button">
            <i className="fas fa-heart"></i>
          </button>
          <button className="comment-remove-button">삭제</button>
        </li>
      );
    });
  }
}

export default CommentList;
