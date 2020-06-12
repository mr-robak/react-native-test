import React from "react";
import { View, StyleSheet } from "react-native";

export default function FlexBox() {
  const styles = StyleSheet.create({
    // flexbox: { height: "100%", flexDirection: "row" },
    flexbox: {
      height: "100%",
      flexDirection: "column",

      alignItems: "center",
      //   justifyContent: "space-evenly",

      //   alignSelf: "center",
    },
  });

  return (
    <View style={styles.flexbox}>
      <View
        style={{
          flex: 1,
          width: "20%",
          backgroundColor: "rebeccapurple",
          //   alignSelf: "center",
          justifyContent: "center",
        }}
      />
      <View
        style={{
          flex: 2,
          width: "50%",
          backgroundColor: "crimson",
          //   alignSelf: "center",
        }}
      />
      <View
        style={{
          flex: 3,
          width: "80%",
          backgroundColor: "gold",
          //   alignSelf: "center",
        }}
      />
    </View>
  );
}
