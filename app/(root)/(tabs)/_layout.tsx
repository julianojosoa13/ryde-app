import { icons } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({
  focused,
  source,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className="h-[78px]">
    <View
      className={`rounded-full h-12 w-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        tintColor={"white"}
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
