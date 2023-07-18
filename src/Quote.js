import useAxios from 'hooks/useAxios';

const Quote = function(props) {
  const {body, pending, error} = useAxios("https://api.kanye.rest");

  return (
    <li>
      {!!body && body.quote}
      {pending && "Please Wait..."}
      {!!error && error}
    </li>
  );

};

export default Quote;