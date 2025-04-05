import React, { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {}

const Rides: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Rides;
