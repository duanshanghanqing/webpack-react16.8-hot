import React from 'react';
import Main from './Main';
import ContextApp from './ContextApp';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Main title="钩子函数" />
        <br />
        <h4>useContext 最佳实践</h4>
        <ContextApp />
        <br />

        <h4>class 组件</h4>
        <ClassComp />

        <h4>函数 组件</h4>
        <FuncComp />
      </div>
    );
  }
}
