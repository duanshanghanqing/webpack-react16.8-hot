import React, { useState, useEffect } from 'react';

// 但是什么是钩子（Hook）？
// 钩子是为了让你抛弃类使用React的，所以它不能在类中运行

// 通过 props 接收组件属性
export default (props) => {
  // 声明一个名为“count”的新状态变量
  // useState是一个钩子（Hook）,在一个函数式组件中调用它，为这个组件增加一些内部的状态。[增加状态]
  // React将会在下一次渲染前保存此状态。
  // useState返回一对值：当前的状态（state value）[状态名称]和一个可以更新状态的函数[状态函数]。
  const [count, setCount] = useState(0);// useState唯一的参数就是初始状态（initial state）

  const [disable, setDisable] = useState(false);

  // 一：第二个参数有，并且不是空数组。可以是 状态(state),也可以是属性(props)
  // 组件实例化后执行第一次执行， 相当于 componentDidMount
  // 当 第二个参数 变化后，return 后的函数 成了参数“更新前”触发，相当于 componentWillUpdate(nextProps, nextState)
  // () => {} 成了“完成更新后”触发，相当于 componentDidUpdate(prevProps, prevState)
  useEffect(() => {
    console.log('componentDidMount[第一次渲染后] || componentDidUpdate[完成更新后]', count);
    return () => {
      console.log('componentWillUpdate[更新前] || componentWillUnmount[卸载前]', count);
    };
  }, [count]);// 代表能够引起副作用执行的依赖, 只有 count 变化才会触发副作用


  // 二：第二个参数有，并且是空数组。
  // 适合做事件绑定和卸载
  useEffect(() => {
    console.log('componentDidMount[第一次渲染后]');
    const handle = () => console.log('click event');
    document.addEventListener('click', handle);
    return () => {
      console.log('componentWillUnmount[卸载前]');
      document.removeEventListener('click', handle);
    };
  }, []);


  // 三：没有第二个参数时
  // 相当与监听全局的副作用，状态变化会触发,属性变化会触发，组件挂载卸载会触发
  // 业务里面最好不用
  useEffect(() => {
    console.log('componentDidMount[第一次渲染后] || componentDidUpdate[完成更新后]', count, props.number);
    return () => {
      console.log('componentWillUpdate[更新前] || componentWillUnmount[卸载前]', count, props.number);
    };
  });


  return (
    <div>
      <button type="button" onClick={() => { setDisable(!disable); }}>{disable ? '启用' : '禁用'}</button>
      <p>
        你点击了
        {count}
        次
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
