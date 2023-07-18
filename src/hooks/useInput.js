const {useState} = require("react");

const useInput = function(initial = "") {
  const [value, setValue] = useState(initial);

  const onChange = function(event) {
    setValue(event.target.value);
  };


  return {value, onChange};
};

export default useInput;