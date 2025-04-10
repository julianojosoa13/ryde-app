import RideLayout from "@/components/RideLayout";
import { Text } from "react-native";

const BookRide = () => {
  // TODO : GET FROM SNIPPETS
  return (
    <RideLayout title="Find a Ride" snapPoints={["80%"]}>
      <Text>Book your ride</Text>
    </RideLayout>
  );
};

export default BookRide;
