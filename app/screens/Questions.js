import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
const Questions = ({ index, question, numberOfQuestions }) => {
  return (
    <View style={styles.container}>
      {/* Question Counter */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{index + 1}</Text>
        <Text style={styles.counterText}>/ {numberOfQuestions}</Text>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
};

Questions.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {},
  counterContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  counterText: {
    color: "white",
    fontSize: 15,
    opacity: 0.6,
    marginRight: 2,
  },
  questionText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Questions;
