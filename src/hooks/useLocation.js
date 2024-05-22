import {useEffect, useState} from "react";

const useLocation = function() {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});

  useEffect(() => {

    window.navigator.geolocation.getCurrentPosition(res => {
      setLocation({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude
      });
    });

  }, []);

  return location;
};

export default useLocation;