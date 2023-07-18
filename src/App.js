import 'App.css';
import Counter from 'Counter';
import useInput from 'hooks/useInput';
import useLocation from 'hooks/useLocation';
import useMousePosition from 'hooks/useMousePosition';
import useAxios from 'hooks/useAxios';
import Quote from 'Quote';
import useCount from 'hooks/useCount';

export default function App() {
  const {x, y} = useMousePosition();
  const {lat, long} = useLocation();
  const title = useInput("React Hooks");
  const {count, increment} = useCount(0);

  return (
    <div className="App">
      <h2>{title.value}</h2>
      <h3>
        {x}:{y}
      </h3>
      <h3>
        {lat}:{long}
      </h3>

      <Counter />

      <input {...title} />
      <ul>
        {!(count % 2) && <Quote />}
      </ul>
      <button onClick={increment}>Toggle</button>

    </div>
  );
}
