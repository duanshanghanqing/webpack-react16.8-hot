import React, { useReducer } from 'react';

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return init(action.payload);
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


const myContext = React.createContext();

// 函数式组件
const ContextProvider = (props) => {
  // 设置初始化属性
  const { initialCount = 0 } = props;

  // 参数一：reducer ，逻辑处理
  // 参数二：初始化值, 该值是第三个参数的传参
  // 参数三：生产初始化值的方法
  // 使用useReducer只要，只 state，dispatch 就可以了
  const [state, dispatch] = useReducer(reducer, initialCount, init);


  return (
    // 设置 state, dispatch, initialCount 参数作为 Context 值，向下传递
    <myContext.Provider value={{ state, dispatch, initialCount }}>
      {props.children}
    </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };
