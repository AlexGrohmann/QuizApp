import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import { Colors } from "./Welcome";

const ProgressBar = ({ progress, numberOfQuestions }) => {

  const progressAnim = progress.interpolate({
    inputRange: [0, numberOfQuestions],
    outputRange: ["0%", "100%"],
  });
  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: Colors.blue + "90",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "80%",
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.lila,
    marginBottom: 10,
  },
});
export default ProgressBar;
