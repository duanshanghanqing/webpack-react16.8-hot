import React from 'react';

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const { count } = this.state;
    if (count % 2 === 0) {
      console.log(count);
    }
  }

  // 视图被更新重新render触发
  componentDidUpdate() {
    const { count } = this.state;
    if (count % 2 === 0) {
      console.log(count);
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>
          你点击了
          {count}
          次
        </p>
        <button type="button" onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComp;
