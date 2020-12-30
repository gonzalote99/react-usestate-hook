import React from 'react';
import './styl.css';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(state => state + 1);
  };

  const handleDecrease = () => {
    setCount(state => state - 1);
  };

  const handle2 = () => {
    setCount(state => + 2);
  }

  return (
    <div>
      Count: {count}
      <hr />
      <div>
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
        <button type="button" onClick={handle2}>
          2
        </button>
      </div>
    </div>
  );
};

export default App;
