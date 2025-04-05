import React, { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {}

const Profile: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
