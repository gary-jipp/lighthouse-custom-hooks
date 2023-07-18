const {useState, useEffect} = require("react");

const useMousePosition = function() {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {

    const mouseMoveHandler = function(event) {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const cleanup = function() {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    return cleanup;
  }, []);


  return coords;
};
export default useMousePosition;