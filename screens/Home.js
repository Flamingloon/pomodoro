import { View, Text, Button, LayoutAnimation } from "react-native";
import React, { useState } from "react";
import PlayPauseButton from "../components/PlayPauseButton";

const Home = ({ navigation, route }) => {
  const [secondsLeft, setSecondsLeft] = useState(1500);
  const [timerOn, setTimerOn] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const [timerState, setTimerState] = useState(false);
  const [animationParameters, setAnimationParameters] = useState({
    tasksDisplay: "flex",
    modesDisplay: "flex",
  });
  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    if (timerState) {
      setAnimationParameters({
        tasksDisplay: "flex",
        modesDisplay: "flex",
      });
    } else {
      setAnimationParameters({
        tasksDisplay: "none",
        modesDisplay: "none",
      });
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-between", height: "100%" }}>
      <PlayPauseButton
        setSecondsLeft={setSecondsLeft}
        setTimerOn={setTimerOn}
        _onPress={_onPress}
        mode={mode}
        setTimerState={setTimerState}
        timerState={timerState}
        setAnimationParameters={setAnimationParameters}
      />
      <Button
        style={{ marginTop: "auto" }}
        onPress={() => navigation.navigate("Tasks")}
        title="Tasks->"
      />
    </View>
  );
};

export default Home;
