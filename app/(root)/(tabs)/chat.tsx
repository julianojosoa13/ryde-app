import React, { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {}

const Chat: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Chat;
