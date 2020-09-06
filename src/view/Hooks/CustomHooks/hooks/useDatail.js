import React, { useState, useEffect } from 'react';

export default function useDatail(params, deps = []) {
  const [datail, setDatail] = useState(null);

  useEffect(() => {
    const [actionId] = deps;// 把依赖的参数结构出来
    (async () => {
      if (actionId) {
        const topicDatail = await fetch(`https://cnodejs.org/api/v1/topic/${actionId}`)
          .then((response) => response.json());
        // console.log(topicDatail);
        if (topicDatail && topicDatail.data) {
          setDatail(topicDatail.data);
        }
      }
    })();
  }, deps);

  return datail;
}
