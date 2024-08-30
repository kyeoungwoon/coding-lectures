const getCurrentLocationService = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: false,
          // timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

export default getCurrentLocationService;
