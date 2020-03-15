import React from 'react';
import './index.css';
import './index.less';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState((prevState) => ({
      count: prevState.count + 1,
    })), 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Counter">
        <img src={require('../../assets/images/logo.png')} alt="" />
        <video src={require('../../assets/media/movie.ogg')} controls="controls">
          您的浏览器不支持 video 标签。
        </video>
        {this.state.count}
      </div>
    );
  }
}

export default Counter;
