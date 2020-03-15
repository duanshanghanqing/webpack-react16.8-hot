import { combineReducers } from 'redux';
import { reducer as counter } from '../view/Counter/store';
import { reducer as about } from '../view/About/store';

// 使用redux的combineReducers方法将所有reducer合并起来
export default combineReducers({
  counter,
  about,
});
