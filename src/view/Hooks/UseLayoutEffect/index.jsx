import React, {
  useEffect, useLayoutEffect, useState, useCallback, useDebugValue,
} from 'react';

function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect-挂载');
    console.log(count);
    // useDebugValue(count > 5 ? '满五' : '小五');// 安装react Debug 工具
    return () => {
      console.log('useEffect-销毁');
    };
  }, [count]);

  // useLayoutEffect 优先 useEffect 执行
  useLayoutEffect(() => {
    console.log('useLayoutEffect-挂载');
    console.log(count);
    return () => {
      console.log('useLayoutEffect-销毁');
    };
  }, [count]);

  const clickHandle = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <p>
        <button type="button" onClick={clickHandle}>+</button>
      </p>
    </div>
  );
}

export default UseLayoutEffect;
