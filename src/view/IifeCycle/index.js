import React from 'react';
import Demonstration from './Demonstration';

// 组件生命周期
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '默认title',
    };
  }

  setTitle = () => {
    this.setState({
      title: `更新后title${new Date().getTime()}`,
    });
  }

  render() {
    return (
      <div>
        <h3>组件生命周期</h3>
        <button type="button" onClick={this.setTitle}>修改title值</button>
        <Demonstration title={this.state.title} />
      </div>
    );
  }
}
