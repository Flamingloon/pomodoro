import { View, Text, Button } from "react-native";
import React from "react";

const Tasks = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("Home")} title="Tasks->" />
    </View>
  );
};

export default Tasks;
