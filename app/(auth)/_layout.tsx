import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="welcome" />
      <Stack.Screen options={{ headerShown: false }} name="sign-up" />
      <Stack.Screen options={{ headerShown: false }} name="sign-in" />
    </Stack>
  );
};

export default Layout;
