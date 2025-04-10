import { icons } from "@/constants";
import { calculateRegion, generateMarkerFromData } from "@/lib/map";
import { useDriverStore, useLocationStore } from "@/store";
import { Driver, MarkerData } from "@/types/type";
import { useEffect, useState } from "react";

import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";

const drivers: Driver[] = [];

const Map = () => {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const { selectedDriver, setDrivers } = useDriverStore();

  const [markers, setMarkers] = useState<MarkerData[]>([]);

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  useEffect(() => {
    if (Array.isArray(drivers)) {
      setDrivers(drivers);
      if (!userLatitude || !userLongitude) return;

      const newMarkers = generateMarkerFromData({
        data: drivers,
        userLatitude,
        userLongitude,
      });

      setMarkers(newMarkers);
    }
  }, [setDrivers, userLatitude, userLongitude]);

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle={"light"}
    >
      {markers.map((marker) => {
        const { latitude, longitude } = marker;
        return (
          <Marker
            key={marker.id}
            coordinate={{
              latitude,
              longitude,
            }}
            title={marker.title}
            image={
              selectedDriver === marker.id ? icons.selectedMarker : icons.marker
            }
          />
        );
      })}
    </MapView>
  );
};

export default Map;
