import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { useDriverStore } from "@/store";
import { Driver } from "@/types/type";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore;

  return (
    <RideLayout title="Choose your driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => {
          return (
            <DriverCard
              item={item}
              selected={selectedDriver}
              setSelected={() => setSelectedDriver(Number(item.id!))}
            />
          );
        }}
        ListFooterComponent={() => {
          return (
            <View className="mx-5 mt-10">
              <CustomButton
                title="Select Ride"
                onPress={() => router.push("/(root)/book-ride")}
              />
            </View>
          );
        }}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
