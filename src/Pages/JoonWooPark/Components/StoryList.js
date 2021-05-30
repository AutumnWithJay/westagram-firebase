import React from 'react';

class StoryList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { userData } = this.props;
    return userData.map((data, index) => {
      return (
        <div className="story-data" key={index}>
          <img
            alt={`user: ${data.id} profile`}
            src={data.img_url}
            className="story-picture"
          />
          <span className="story-user">{data.id.slice(0, 9)}...</span>
        </div>
      );
    });
  }
}

export default StoryList;
