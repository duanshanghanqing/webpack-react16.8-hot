// useReducer中第三个参数
export function init({ initialCount = 0, initUserInfo = {} }) {
  return { count: initialCount, userInfo: initUserInfo };
}

// useReducer中第一个参数
export function reducer(state, action) {
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
