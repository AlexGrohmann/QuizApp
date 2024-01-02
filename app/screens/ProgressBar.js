import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import { Colors } from "./Welcome";
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, numberOfQuestions }) => {
  const progressAnim = progress.interpolate({
    inputRange: [0, numberOfQuestions],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.instanceOf(Animated.Value).isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "80%",
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.lila,
    marginBottom: 10,
  },
  progressBar: {
    height: 5,
    borderRadius: 5,
    backgroundColor: `${Colors.blue}90`,
  },
});

export default ProgressBar;
