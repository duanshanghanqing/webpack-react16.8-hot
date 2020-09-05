// 自定义Hooks
import React, { useState, useEffect } from 'react';

export default function CustomHooks() {
  const [topics, setTopics] = useState([]);

  const [id, setId] = useState('');

  const [datail, setDatail] = useState(null);
  const getTopic = async (id) => {
    const topicDatail = await fetch(`https://cnodejs.org/api/v1/topic/${id}`)
      .then((response) => response.json());
    console.log(topicDatail);
    if (topicDatail && topicDatail.data) {
      setDatail(topicDatail.data);
    }
  };


  // 只执行一次
  useEffect(() => {
    (async () => {
      const topicsRes = await fetch('https://cnodejs.org/api/v1/topics')
        .then((response) => response.json());
      if (topicsRes && Array.isArray(topicsRes.data)) {
        setTopics(topicsRes.data);
        setId(topicsRes.data[0].id);
        getTopic(topicsRes.data[0].id);
      }
    })();
  }, []);

  const topicsSwitch = (id) => {
    setId(id);
    getTopic(id);
  };

  return (
    <div style={{ display: 'flex' }}>
      <ul style={{ width: 800 }}>
        {
          topics.map((item) => (
            <li
              onClick={() => { topicsSwitch(item.id); }}
              key={item.id}
              style={{ backgroundColor: id === item.id ? '#cccccc' : '' }}
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
