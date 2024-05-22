const {useState, useEffect} = require("react");

const useFetch = function(url) {
  const [body, setBody] = useState();
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(null);

  useEffect(() => {

    if (!url) {
      return;
    }

    setPending(true);

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        setBody(res);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setPending(false);
      });

  }, [url]);

  return {body, error, pending};
};

export default useFetch;
