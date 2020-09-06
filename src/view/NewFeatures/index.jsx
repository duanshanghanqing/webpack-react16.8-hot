import React from 'react'; // { lazy, Suspense }
import MyComponent from './MyComponent';
import GetDerivedStateFromProps from './GetDerivedStateFromProps';
// React.lazy()  则是使用 Suspense 进行代码分割的方法；
// const OtherComponent = lazy(() => import('./OtherComponent'));

// React.memo() 主要是用于函数式组件，作为 PureComponent 的替代方案；
// const MyComponent = React.memo(props => (
//   <h4>{props.title}</h4>
// ));


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '新特性',
      num: 0,
    };
  }

  componentDidMount() {
    this.numSetInterval = setInterval(() => {
      const { num } = this.state;
      this.setState({
        num: num + 1,
      });
    }, 500);
  }
  
  componentWillUnmount() {
    window.clearInterval(this.numSetInterval);
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <MyComponent title="MyComponent" />
        {/* 异步加载组件 */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense> */}
        <GetDerivedStateFromProps num={this.state.num} />
      </div>
    );
  }
}
