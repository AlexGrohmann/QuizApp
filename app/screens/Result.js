import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types"; // Add PropTypes import
import { Colors } from "./Welcome";

const Result = ({ navigation, route }) => {
  const { score, numberOfQuestions } = route.params;

  const handleRetry = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Your Score</Text>

        <View style={styles.scoreWrapper}>
          <Text style={styles.scoreText}>{score}</Text>
          <Text style={styles.scoreText}> / {numberOfQuestions}</Text>
        </View>

        <TouchableOpacity onPress={handleRetry} style={styles.btnReset}>
          <Text style={styles.btnText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Result.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    color: "white",
    marginBottom: 30,
  },
  scoreWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 30,
  },
  scoreText: {
    fontSize: 100,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnReset: {
    backgroundColor: Colors.pink,
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    letterSpacing: 1,
  },
});

export default Result;
