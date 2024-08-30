const watchId = navigator.geolocation.watchPosition(
  (position) => {
    // 성공 콜백: 위치 정보가 변경될 때마다 호출됩니다.
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  },
  (error) => {
    // 실패 콜백
    console.error(error.message);
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
);

// 위치 추적을 중지하려면 다음과 같이 사용합니다.
navigator.geolocation.clearWatch(watchId);
