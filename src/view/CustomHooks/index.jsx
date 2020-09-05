// 自定义Hooks
import React, { useState, useEffect, useCallback } from 'react';
import useTopics from './hooks/useTopics';
import useDatail from './hooks/useDatail';

export default function CustomHooks() {
  // 调用自定义 hooks,相当于封装了一个状态
  const topics = useTopics();// 初始化优先执行

  // 交互状态
  const [actionId, setActionId] = useState('');

  // 依赖 actionId 状态，依赖的状态要放在前面
  const datail = useDatail('参数占位', [actionId]); // actionId变化后要引发副作用

  // 只执行一次
  useEffect(() => {
    if (topics.length > 0) {
      setActionId(topics[0].id);
    }
  }, [topics]);// 副作用参数

  // 点击事件回调
  const topicsSwitch = useCallback((id) => {
    setActionId(id);
  }, []);
  // const topicsSwitch = (id) => {
  //   setActionId(id);
  // }

  return (
    <div style={{ display: 'flex' }}>
      <ul style={{ width: 800 }}>
        {
          topics.map((item) => (
            <li
              onClick={() => { topicsSwitch(item.id); }}
              key={item.id}
              style={{ backgroundColor: actionId === item.id ? '#cccccc' : '' }}
            >
              {item.title}
            </li>
          ))
        }
      </ul>
      {
        datail && (
        <div
          style={{ width: 800 }}
          dangerouslySetInnerHTML={{ __html: datail.content }}
        />
        )
      }
    </div>
  );
}
