/*
import React, { useContext } from 'react';
import { myContext } from './reducer';

export default function (props) {
    JSON.stringify(props);

    // , dispatch, initialCount
    const { state } = useContext(myContext);
    return (
        <div>ShowCount：{state.count}</div>
    );
}
*/

import React from 'react';
import { myContext } from './reducer';

export default function () {
  // 使用消费者模式调用
  return (
    <myContext.Consumer>
      {/* , dispatch, initialCount */}
      {({ state }) => (
        <div>
          ShowCount：
          {state.count}
        </div>
      )}
    </myContext.Consumer>
  );
}
