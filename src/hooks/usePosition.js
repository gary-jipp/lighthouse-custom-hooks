const {useState, useEffect} = require("react");

const usePosition = function() {
  const [position, setLocation] = useState({});

  useEffect(() => {
    const handleMouseMove = function(event) {

      setLocation({x: event.clientX, y: event.clientY});
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {window.removeEventListener("mousemove", handleMouseMove);};
  });

  return position;
};

export default usePosition;