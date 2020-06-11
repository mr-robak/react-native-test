import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function Footer() {
  const [text, setText] = useState("TEST");
  return (
    <View>
      <Button
        onPress={() => Alert.alert(text)}
        title="Learn More"
        color="green"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "darkgrey",
          borderWidth: 3,
        }}
        onChangeText={(txt) => setText(txt)}
        value={text}
      ></TextInput>
    </View>
  );
}
