import React from 'react';
import { ContextProvider } from './reducer';
import Counter from './Counter';
import CounterTest from './CounterTest';

// 这个例子完美的讲了useContext + useReducer 的用法
export default () => (
  <div className="ContextApp">
    {/* 定义初始参数 */}
    <ContextProvider initialCount={10}>
      <Counter />
      <CounterTest />
    </ContextProvider>
  </div>
);
