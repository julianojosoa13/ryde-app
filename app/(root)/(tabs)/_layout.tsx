import { Tabs } from "expo-router";
import React, { Component } from "react";

export class TabsLayout extends Component {
  render() {
    return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="chat" />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="rides" />
      </Tabs>
    );
  }
}

export default TabsLayout;
