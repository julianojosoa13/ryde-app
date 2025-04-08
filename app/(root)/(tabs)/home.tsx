import RideCard from "@/components/RideCard";
import { Ride } from "@/types/type";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const recentRides: Ride[] = [];

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;
