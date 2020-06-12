import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function Footer() {
  const [input, setInput] = useState("TEST");
  return (
    <View>
      <Button
        onPress={() => Alert.alert(input)}
        title="Learn More"
        color="green"
      />
      <TextInput
        style={{
          marginTop: 4,
          height: 40,
          borderColor: "darkgrey",
          borderWidth: 1,
          borderRadius: 8,
        }}
        onChangeText={(txt) => setInput(txt)}
        value={input}
      ></TextInput>
    </View>
  );
}
