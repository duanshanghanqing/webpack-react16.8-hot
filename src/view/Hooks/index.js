import React from 'react';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';
import ContextApp from './ContextApp';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>class组件</h3>
        <ClassComp />
        <br />
        <h3>函数组件</h3>
        <FuncComp />
        <br />
        <h4>useContext 最佳实践</h4>
        <ContextApp />
      </div>
    );
  }
}
