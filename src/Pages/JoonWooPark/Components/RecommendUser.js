import React from 'react';

class RecommendUser extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { userData } = this.props;
    return userData.map((data, index) => {
      if (index < 5) {
        return (
          <section className="recommend-section" key={index}>
            <img
              alt={`user: ${data.id} profile`}
              src={data.img_url}
              className="recommend-user-picture"
            />
            <span className="recommend-user-id">{data.id}</span>
            <span className="recommend-follow-text">팔로우</span>
          </section>
        );
      }
    });
  }
}

export default RecommendUser;
