import {useEffect, useState} from "react";


const useLocation = function() {
  const [location, setLocation] = useState({lat: 0, long: 0});

  useEffect(() => {
    window.navigator
      .geolocation.getCurrentPosition(res => {
        setLocation({
          lat: res.coords.latitude,
          long: res.coords.longitude
        });
      });

  }, []);


  return location;
};

export default useLocation;