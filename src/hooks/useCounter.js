const {useState} = require("react");

const useCounter = function() {
  const [counter, setCounter] = useState(0);

  const increment = function() {
    setCounter(counter + 1);
  };
  const decrement = function() {
    setCounter(counter - 1);
  };
  const clear = function() {
    setCounter(0);
  };

  return [counter, increment, decrement, clear];
};

export default useCounter;