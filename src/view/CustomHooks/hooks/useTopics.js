import React, { useState, useEffect } from 'react';

export default function useTopics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const topicsRes = await fetch('https://cnodejs.org/api/v1/topics')
        .then((response) => response.json());
      if (topicsRes && Array.isArray(topicsRes.data)) {
        setTopics(topicsRes.data);
      }
    })();
  }, []);

  return topics; // 返回结果
}
