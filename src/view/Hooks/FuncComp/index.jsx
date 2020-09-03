import React, { useState } from 'react';

const FuncComp = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        {' '}
        你点击了
        {count}
        {' '}
        次
        {' '}
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default FuncComp;
