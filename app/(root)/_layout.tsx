import { Stack } from "expo-router";
import React from "react";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;
