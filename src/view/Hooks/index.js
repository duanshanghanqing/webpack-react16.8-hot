import React from 'react';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';
import ContextApp from './ContextApp';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      number: 0,
    };
  }

  render() {
    const { visible, number } = this.state;
    return (
      <div>
        <h4>useContext 最佳实践</h4>
        <ContextApp />
        <br />

        <h4>class 组件</h4>
        <ClassComp />

        <h4>
          函数 组件
          <button type="button" onClick={() => { this.setState({ visible: !visible }); }}>{visible ? '隐藏' : '显示'}</button>
          <button type="button" onClick={() => { this.setState({ number: number + 1 }); }}>{number}</button>
        </h4>
        {
          visible && <FuncComp number={number} />
        }
      </div>
    );
  }
}
