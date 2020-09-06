// 事件回调使用useCallback
// 根据已有状态计算额外的数据，并且计算的过程很消耗性能，使用 useMemo
import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';


export default function UseCallbackUseMemo() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    const countSetInterval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    const otherCountSetInterval = setInterval(() => {
      setOtherCount((otherCount) => otherCount + 1);
    }, 50);

    return () => {
      window.clearInterval(countSetInterval);
      window.clearInterval(otherCountSetInterval);
    };
  }, []);
  console.log('更新...'); // 会一直打印，说明组件在一直渲染。


  // const handleClick = () => { // 每次这里都要从新定义一个方法，就很消耗内存和性能
  //     console.log(count); // 每次打印的都是最新的
  // }

  // 以下三种，根据工作中的业务场景，自我选择
  // 一：理想状态，handleClick只需要被记住一次，每次使用就拿出来用。使用 useCallback
  const handleClick = useCallback((e) => {
    console.log(count); // 每次都是 0
  }, []); // 第二个参数为空数组，说明该函数不依赖其他状态变化产生副作用。

  // 二：依赖状态
  // const handleClick = useCallback((e) => {
  //     console.log(count); // 每次都是 最新的
  // }, [count]); // 第二个参数为非空数组，数码该函数依赖 count 状态变化参数产生副作用

  // 三：全局，任何状态都产生副作用
  // const handleClick = useCallback((e) => {
  //     console.log(count); // 每次都是 最新的
  // }); // 没有第二个参数，数码任何状态变化都会产生副作用

  // 上面加了 otherCount 状态，这个状态变化的速度有点快，count还没变化，又被重新计算了，
  // 会导致 很多重复计算，虚耗性能和内存？ 怎么优化呢，期望只有 count 变化了才计算，这种
  // 场景就可以使用 useMemo
  // const result = count * 100;
  const result = useMemo(() => {
    console.log('计算');
    return count * 100;
  }, [count]); // 只依赖 count 变化，才重新计算
  // 可以看到 “计算” 只有 1 秒才打印一次

  return (
    <div>
      <p>
        count：
        {count}
        -----
        result：
        {result}
        -----
        otherCount：
        {otherCount}
      </p>
      <p>
        <button type="button" onClick={handleClick}>点击</button>
      </p>
    </div>
  );
}
