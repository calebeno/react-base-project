'use strict';

import React from 'react';

class AwesomeCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div className="red"><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeCounter;