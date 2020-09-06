import React from 'react';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';
import UseReducerComp from './UseReducerComp';
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

        <h1 style={{ fontSize: 28 }}>class组件和函数式组件对比，主要介绍 useState, useEffect 最佳使用</h1>
        <h4>1.class组件</h4>
        <ClassComp />

        <h4>2.函数式 组件</h4>
        <div>
          测试组件卸载重装
          <button type="button" onClick={() => { this.setState({ visible: !visible }); }}>{visible ? '隐藏' : '显示'}</button>
        </div>
        <div>
          测试组件属性变化
          <button type="button" onClick={() => { this.setState({ number: number + 1 }); }}>{number}</button>
        </div>
        {
          visible && <FuncComp number={number} />
        }
        <br />


        <h1 style={{ fontSize: 28 }}>useReducer 最佳实践</h1>
        <UseReducerComp />
        <br />

        <h1 style={{ fontSize: 28 }}>useContext + useReducer 最佳实践</h1>
        <ContextApp />
        <br />


      </div>
    );
  }
}
