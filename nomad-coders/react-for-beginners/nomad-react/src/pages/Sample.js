import React from "react";
import { useCurrentLocation } from "../hooks";

const Sample = () => {
  const { location, error } = useCurrentLocation();
  return (
    <div>
      <h1>Sample</h1>
      <p>
        location:{" "}
        {location
          ? `${location.latitude} ${location.longitude}`
          : "LOADING ..."}
      </p>
      <p>error: {error}</p>
    </div>
  );
};

export default Sample;
