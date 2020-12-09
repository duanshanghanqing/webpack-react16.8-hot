import React, { useReducer } from 'react';

/*
// useReducer中第三个参数
function init({ initialCount = 0, initUserInfo = {} }) {
  return { count: initialCount, userInfo: initUserInfo };
}

// useReducer中第一个参数
function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return init(action.initData);
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setUserName':
      return { ...state, userInfo: { ...state.userInfo, userName: action.userName } };
    default:
      return state;
  }
}
*/
// 一般封装在一个文件里
import { init, reducer } from './store';

export default function (props) {
  JSON.stringify(props);

  // useReducer中第二个参数
  // 实际应用中，可以从props传递过来
  const initData = { initialCount: 10, initUserInfo: { userName: '张三' } };

  // 参数一：reducer ，逻辑处理
  // 参数二：初始化值, 该值是第三个参数的传参
  // 参数三：生产初始化值的方法
  // 使用useReducer只要，只 state，dispatch 就可以了
  const [state, dispatch] = useReducer(reducer, initData, init);
  return (
    <div>
      <p>{state.count}</p>
      <p>
        <button type="button" onClick={() => { dispatch({ type: 'increment' }); }}>+</button>
        &nbsp;&nbsp;
        <button type="button" onClick={() => { dispatch({ type: 'decrement' }); }}>-</button>
      </p>
      <br />

      <p>{state.userInfo.userName}</p>
      <p>
        <button type="button" onClick={() => { dispatch({ type: 'setUserName', userName: '李四' }); }}>修改userName</button>
      </p>

      <br />
      <p>
        <button type="button" onClick={() => { dispatch({ type: 'reset', initData }); }}>重置</button>
      </p>
    </div>
  );
}
