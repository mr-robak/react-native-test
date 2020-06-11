import React from "react";
import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <TouchableOpacity
        onPress={() => Alert.alert("Learning RN is so easy")}
        title="Learn More"
        color="#c1262c"
      >
        <ActivityIndicator
          size="large"
          color="lightblue"
          style={{ marginBottom: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
