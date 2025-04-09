import GoogleTextInput from "@/components/GoogleTextInput";
import * as Location from "expo-location";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useLocationStore } from "@/store";
import { Ride } from "@/types/type";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const recentRides: Ride[] = [];

const Home = () => {
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const { user } = useUser();
  const [hasPermissions, setHasPermissions] = useState(false);

  const loading = false;

  const handleSignOut = () => {};

  const handleDestinationPress = () => {};

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setHasPermissions(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setUserLocation({
        latitude,
        longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    };

    requestLocation();
  }, []);

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => {
          return (
            <>
              <View className="flex flex-row items-center justify-between my-5">
                <Text className="text-2xl font-JakartaExtraBold capitalize">
                  Welcome{", "}
                  {user?.firstName ||
                    user?.emailAddresses[0].emailAddress.split("@")[0]}{" "}
                  👋
                </Text>
                <TouchableOpacity
                  onPress={handleSignOut}
                  hitSlop={8}
                  className="w-10 h-10 rounded-full bg-white justify-center items-center"
                >
                  <Image source={icons.out} className="w-4 h-4" />
                </TouchableOpacity>
              </View>

              <GoogleTextInput
                icon={icons.search}
                containerStyle="bg-white shadow-md shadow-neutral-300"
                handlePress={handleDestinationPress}
              />

              <>
                <Text className="text-xl font-JakartaBold mt-5 mb-3">
                  Your current location
                </Text>

                <View className="flex flex-row items-center bg-transparent h-[300px]">
                  <Map />
                </View>
              </>

              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Recent Rides
              </Text>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
