import { useState, useEffect } from "react";
import { getCurrentLocationService } from "../services";

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentLocationService()
      .then((location) => {
        setLocation(location);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  console.log(`LOG-HOOK loc: ${location} error: ${error}`);

  return { location, error };
};

export default useCurrentLocation;
