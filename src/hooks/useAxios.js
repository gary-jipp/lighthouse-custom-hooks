import {useEffect, useState} from "react";
import axios from 'axios';

const useAxios = function(url = "") {
  const [body, setBody] = useState();
  const [pending, setPending] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setPending(true);
    setError(null);
    setBody(null);

    setTimeout(() => {

      axios.get(url)
        .then(res => {
          setBody(res.data);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setPending(false);
        });

    }, 1000);


  }, [url]);

  return {body, pending, error};
};

export default useAxios;