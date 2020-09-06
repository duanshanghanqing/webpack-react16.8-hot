import React, { useRef, useImperativeHandle } from 'react';

// 使用 React.forwardRef 包装子组件，接收透传的ref
const FancyInput = React.forwardRef((props, ref) => {
  // 声明组件内部的 Ref
  const inputRef = useRef();

  // 通过 useImperativeHandle 方法来自定义开放给父组件的 current。
  // 实现父组件调用子组件的方法，父子通信
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    alert: () => {
      alert(123);
    },
  }));// [xxx]

  return <input ref={inputRef} type="text" />;
});

function UseImperativeHandle() {
  // 需求：实现一个按钮，让子组件内部input自动获取焦点
  // 并且父组件有父组件的ref，只组件有只组件的ref
  const fancyInputRef = useRef(); // 声明ref
  return (
    <div>
      {/* 透传ref */}
      <FancyInput ref={fancyInputRef} />
      <br />
      <button
        type="button"
        // 触发获取焦点
        onClick={() => fancyInputRef.current.focus()}
      >
        父组件调用子组件的 focus
      </button>
      <br />
      <button
        type="button"
        // 触发获取焦点
        onClick={() => fancyInputRef.current.alert()}
      >
        父组件调用子组件的 alert
      </button>
    </div>
  );
}

export default UseImperativeHandle;
