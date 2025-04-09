import { icons } from "@/constants";
import { calculateRegion, generateMarkerFromData } from "@/lib/map";
import { useDriverStore, useLocationStore } from "@/store";
import { Driver, MarkerData } from "@/types/type";
import { useEffect, useState } from "react";
import { View } from "react-native";

import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";

const drivers: Driver[] = [];

const Map = () => {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const { selectedDriver, setSelectedDriver } = useDriverStore();

  const [markers, setMarkers] = useState<MarkerData[]>([]);

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  useEffect(() => {
    if (Array.isArray(drivers)) {
      if (!userLatitude || !userLongitude) return;

      const newMarkers = generateMarkerFromData({
        data: drivers,
        userLatitude,
        userLongitude,
      });

      setMarkers(newMarkers);
    }
  }, [drivers]);

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showPointsOfInterests={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle={"light"}
    >
      {markers.map((marker) => {
        const { latitude, longitude } = marker;
        return (
          <Marker
            key={marker.id}
            coordinates={{
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
