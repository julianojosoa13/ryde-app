import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";
import { Text, View } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setUserAddress,
    setDestinationAddress,
  } = useLocationStore();

  return (
    <RideLayout>
      <Text className="text-2xl">Find a ride!</Text>
    </RideLayout>
  );
};

export default FindRide;
