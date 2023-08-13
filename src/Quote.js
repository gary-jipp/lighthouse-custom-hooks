import useAxios from 'hooks/useAxios';
import {useState} from 'react';

const Quote = function(props) {
  const [show, setShow] = useState(false);

  const {body, pending, error} = useAxios("https://api.office.rest/character");
  // const {body, pending, error} = useAxios("https://api.kanye.rest");

  const text = body?.quote;
  const character = body?.character;

  return (
    <li>
      {pending && "Please Wait..."}
      {!!error && error}

      {text}
      {show && <div>{character}</div>}

      {!show && text && <button onClick={() => setShow(true)}>who said that?</button>}
    </li>
  );

};

export default Quote;