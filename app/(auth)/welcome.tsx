import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full bg-white items-center justify-between">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-md text-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
