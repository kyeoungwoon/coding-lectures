import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useCurrentLocation } from "../hooks";

const KakaoMap = () => {
  const { location, error } = useCurrentLocation();
  const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // 스크립트를 비동기적으로 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true); // 스크립트가 로드되면 상태 업데이트
    };

    document.head.appendChild(script);

    // Clean-up function: 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }, [KAKAO_JS_KEY]);

  if (error) {
    return <div>{error}</div>;
  }
  // 스크립트 로드 중 또는 위치 정보가 아직 없을 때
  if (!scriptLoaded || !location) {
    return <div>Loading Map ...</div>;
  }

  return (
    <Map
      center={{ lat: location.latitude, lng: location.longitude }}
      style={{ width: "100%", height: "360px" }}
      level={6}
    >
      <MapMarker position={{ lat: location.latitude, lng: location.longitude }}>
        {/* <div style={{ color: "#000" }}>Hello World!</div> */}
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
