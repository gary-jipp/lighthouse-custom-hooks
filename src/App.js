import 'App.css';
import useCounter from 'hooks/useCounter';
import useInput from 'hooks/useInput';
import usePosition from 'hooks/usePosition';
import {useEffect, useImperativeHandle, useState} from 'react';
import useFetch from 'useFetch';
import useLocation from 'useLocation';

export default function App() {
  const text = useInput("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const base = `https://api.thecatapi.com/v1/breeds/search?q=`;

  const [counter, increment, decrement, clear] = useCounter();
  // const position = usePosition();

  const {body, error, pending} = useFetch(url);
  console.log(pending);


  const location = useLocation();

  const onClick = function() {
    setUrl(base + text.value);
  };

  return (
    <div className="App">

      <h2>Custom Hooks</h2>


      <div>
        <div>
          {counter}
        </div>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>0</button>
        <button onClick={increment}>+</button>
      </div>

      <div>
        {location.latitude}, {location.longitude}
      </div>

      {/* <input value={url.value} onChange={url.onChange} /> */}

      <input  {...text} />
      <div>
        <button onClick={onClick}>Fetch Cat</button>
      </div>

      <code>
        {url}
      </code>

      <div>
        {body && body[0] && body[0].description}
        {error && error}
        {pending && "One moment please ..."}
      </div>


    </div>
  );
}
