import {useEffect, useState} from "react";
import useCount from "hooks/useCount";
import useDocumentTitle from "hooks/useDocumentTitle";

const Counter = function() {
  const {count, increment, decrement, clear} = useCount(3);
  useDocumentTitle("Count: " + count);

  return (
    <div>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;