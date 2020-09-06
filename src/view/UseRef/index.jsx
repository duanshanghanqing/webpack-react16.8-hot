import React, { useRef, useEffect, forwardRef } from 'react';
// 需求：一刷页面自动聚焦

// 第一个版本, ref在内部实现
/*
const Input = () => {
    // inputDom.focus();

    // 初始化
    const inputRef = useRef();

    // 组件挂载完毕
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = 'hello world';
    }, []);

    return (
        <input ref={inputRef} />
    );
}

export default function UseRef() {
    return (
        <div>
            <Input />
        </div>
    );
}
*/

// 第二个版本，ref在外部实现， 主要使用 forwardRef 方法传递 ref
const FInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default function UseRef() {
  const fInputRef = useRef();
  useEffect(() => {
    fInputRef.current.focus();
    fInputRef.current.value = 'hello world';
  }, []);
  return (
    <div>
      <FInput ref={fInputRef} placeholder="请输入" />
    </div>
  );
}
