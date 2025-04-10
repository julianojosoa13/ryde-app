import { icons } from "@/constants";
import { router } from "expo-router";
import { ReactNode, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "./Map";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const RideLayout = ({
  title,
  children,
  snapPoints,
}: {
  title: string;
  children: ReactNode;
  snapPoints: string[];
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  className="h-6 w-6"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <Text className="text-2xl ml-5 font-JakartaSemiBold">
              {title || "Go Back"}
            </Text>
          </View>
          <Map />
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints || ["40%", "85%"]}
          index={0}
          keyboardBehavior="extend"
        >
          <BottomSheetView styles={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
