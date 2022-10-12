import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation, route }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("Tasks")} title="Tasks->" />
    </View>
  );
};

export default Home;
