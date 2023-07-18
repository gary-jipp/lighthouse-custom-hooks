const {useState} = require("react");

const useCount = function(initial = 0) {
  const [count, setCount] = useState(initial);

  const increment = function() {
    setCount(count + 1);
  };

  const decrement = function() {
    setCount(count - 1);
  };

  const clear = function() {
    setCount(0);
  };

  return {count, increment, decrement, clear};
};

export default useCount;