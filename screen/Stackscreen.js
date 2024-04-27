import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Stackscreen() {
  return <View>{/* <Text style={styles.title}>Stack screen</Text> */}</View>;
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%",
  },
});
export default Stackscreen;
