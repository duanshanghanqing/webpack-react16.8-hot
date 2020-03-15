import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: '张三',
      num: 0,
    };
  }

  // 把 Props 映射到 State) 上
  static getDerivedStateFromProps(nextProps, prevState) {
    const { num } = nextProps;
    // 新的 Props 值和上一个 State值比较， 不相等就把 Props 值设置为State值
    if (num !== prevState.num) {
      return {
        key: 'num',
        num,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  // 在componentDidUpdate中进行异步操作，驱动数据的变化
  componentDidUpdate() {
    // 实现监听属性变化
    if (this.state.key === 'num') {
      console.log(this.state[this.state.key]);
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.num}</h3>
      </div>
    );
  }
}
