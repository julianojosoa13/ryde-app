import React, { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {}

const Index: FC<Props> = (props) => {
  return (
    <SafeAreaView className="flex-1 h-screen w-screen justify-center items-center">
      <Text className="text-center mx-auto text-3xl text-red-600 font-bold">
        Hello, World
      </Text>
    </SafeAreaView>
  );
};

export default Index;
