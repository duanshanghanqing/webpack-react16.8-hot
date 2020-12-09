import React from 'react';
// React.Component 组件下的方法
class Demonstration extends React.Component {
  // 装载:
  constructor(props) {
    super(props);
    console.log('装载-[constructor(props)]-1');
    this.state = {
      Title: '',
      list: [],
    };
  }

  // 16.0前的写法，过时不用
  // 将要装载，在render之前调用；
  // componentWillMount() {
  //   console.log('componentWillMount 将要装载，在render之前调用,可以在服务端被调用，也可以在浏览器端被调用；');
  // }
  // UNSAFE_componentWillMount()

  // 16.0前的写法，过时不用
  /*
  // 更新调用:
  // Props 变化触发
  componentWillReceiveProps(nextProps) {
    const { Title } = this.state;
    if (nextProps.title !== Title) {
      // 更新state
      // 可以调内部其他方法
      this.setState({ Title: nextProps.title });
      // this._doAsyncOperation();
    }
  }
  // UNSAFE_componentWillReceiveProps(nextProps){
  // }
  */

  // 16.0后的写法，推荐用法
  // 装载 + 更新 都调用:
  // 只监听 Props 变化触发
  // 组件实例化后和接收新属性或属性发生变化时将会调用getDerivedStateFromProps。
  // 是属性和当前组件内部状态比较，它应返回一个要更新状态的对象来更新状态，或者返回
  // null来表示属性不需要更新任何状态
  static getDerivedStateFromProps(nextProps, prevState) { // 更新的Props，之前的旧的State。返回新的State
    console.log('装载-[static getDerivedStateFromProps(nextProps, prevState)]-2');
    console.log('更新-[static getDerivedStateFromProps(nextProps, prevState)]-5');
    console.log(nextProps, prevState);
    // 观察 Props Title 属性的变化，来更新内部状态
    if (nextProps.title !== prevState.Title) {
      // 更新state
      // 不可以调内部其他方法，componentDidUpdate(prevProps, prevState) {}方法中更新状态
      return {
        Title: nextProps.title,
      };
    }
    return null;
  }

  // 更新:
  // 比较 新的 nextProps 和当前state 是否相同，或 ，设置即将更新的 nextState 和 当前 state 比较是否相同，
  // 相同就不更新视图，不相同更新，从而提升性能
  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新-[shouldComponentUpdate(nextProps, nextState)]-6');
    console.log('即将更新的props', nextProps, '   当前的props', this.props, '    即将更新的state', nextState, '   当前的state', this.state);
    // 这里只是方便比较，应该用不可变数据结构
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false;// 不更新
    }
    return true; // 更新
  }

  // 更新:
  // 在render之前调用，state已更新
  // 典型场景：获取render之前的dom状态，https://blog.csdn.net/wust_cyl/article/details/84306393
  // 在最新的渲染输出提交给DOM前 将 会立即调用。它让你的组件能在当前的值可能要改变前获得它们。
  // 这一生命周期返回的任何值将会 作为参数被传递给componentDidUpdate()。
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('上一次的值-[getSnapshotBeforeUpdate(prevProps, prevState)]-8');
    console.log('上一次的值props', prevProps, '    上一次的值state', prevState);
    return 1;
  }

  // 更新完成后触发:
  // 紧跟在更新发生后调用。对于初次的渲染，该方法并不会调用。
  // 若shouldComponentUpdate()返回false，componentDidUpdate()将不会被调用。
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('上一次的值-[componentDidUpdate(prevProps, prevState, snapshot)]-9');
    // snapshot: 为 getSnapshotBeforeUpdate() 方法返回的值
    console.log(
      '上一次的值props', prevProps, '   更新后的props', this.props,
      '    上一次的值state', prevState, '   更新后的state', this.state,
      '    getSnapshotBeforeUpdate返回的值', snapshot,
    );

    // 监听某个属性props发生变化，发送异步请求
    if (this.props.title !== prevProps.title) {
      // this.fetchData(this.props.title);
    }

    // 监听某个状态state发生变化，发送异步请求， 配合 static getDerivedStateFromProps 使用
    if (this.state.Title !== prevState.Title) {
      // this.fetchData(this.props.title);
    }
  }

  // 装载:
  // 更新:
  render() {
    console.log('装载-[render()]-3');
    console.log('装载-[render()]-7');
    return (
      <div>
        {this.state.Title}
        <ul>
          {
            this.state.list.map((item) => <li key={item}>{item}</li>)
          }
        </ul>
      </div>
    );
  }

  // （装载完成），在render之后调用
  // componentDidMount()紧跟在组件装载后（被插入树中）调用。可以立即调用setState()
  componentDidMount() {
    console.log('装载-[componentDidMount()]-4');
    this.setState({
      list: ['react', 'vue', 'ng'],
    });
  }

  // 卸载
  // 当一个组件被从DOM中移除时，该方法被调用：
  componentWillUnmount() {
    console.log('卸载-[componentWillUnmount()]-10');
  }
}

// efaultProps可以被定义为在组件类本身上的一个属性，为该类设置默认属性
Demonstration.defaultProps = {
  color: 'blue',
};

export default Demonstration;

/*
ReactDOM 下的方法
      render()： 渲染一个React元素成为DOM，放到所提供的container里。并且返回这个组件的一个 引用 (或者对于无状态组件返回null)。
      ReactDOM.hydrate(element, container[, callback]): 如果你要进行服务端渲染，
          请使用ReactDOM.hydrate方法替换ReactDOM.render， 客户端的渲染请保持使用ReactDOM.render方法。
      ReactDOM.unmountComponentAtNode(container): 从DOM元素中移除已挂载的React组件，清除它的事件处理器和state。
          如果容器内没有挂载任何组件，这个函数什么都不会干。 有组件被卸载的时候返回true，没有组件可供卸载时返回 false。
      ReactDOM.findDOMNode(component)：如果这个组件已经被挂载到DOM中，函数会返回对应的浏览器中生成的DOM元素 。不提倡使用
      ReactDOM.createPortal(child, container) 把当前组件包裹的html内容渲染到指定dom节点内
      https://codepen.io/gaearon/pen/yzMaBd
      render() {
        // React does *not* create a new div. It renders the children into `domNode`.
        // `domNode` is any valid DOM node, regardless of its location in the DOM.
        return ReactDOM.createPortal(
          this.props.children,
          domNode,
        );
      }
ReactDOMServer [服务端渲染的方法]
      ReactDOMServer.renderToString(element)： 把 dom 字符串安流的方式输出到前端
          参考  https://github.com/duanshanghanqing/react-ssr/blob/master/react-ssr-14/src/server/root.js 58行代码
      ReactDOMServer.renderToStaticMarkup(element): 类似 renderToString，但是不会创建额外的DOM属性，
          例如 data-reactid 这些仅在React内部使用的属性。如果你希望把React当作一个简单的静态页面生成器来使用，
          这很有用，因为去掉额外的属性可以节省很多字节。
*/
