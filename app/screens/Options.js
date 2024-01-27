import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Colors } from "./Welcome";

const Options = ({ navigation }) => {
  const fadeAnim = useState(new Animated.Value(1))[0];
  const progress = useState(new Animated.Value(0))[0];
  const [questionsOptions, setQuestionsOptions] = useState("all");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const handleQuestionsOptionPress = (option) => {
    setQuestionsOptions(option);
  };

  const handleNumberOfQuestionsPress = (number) => {
    setNumberOfQuestions(number);
  };

  const handleStartQuiz = () => {
    navigation.navigate("Quiz", {
      questionsOptions: questionsOptions,
      numberOfQuestions: numberOfQuestions,
    });
    startQuiz();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Topics:</Text>
      <TouchableOpacity
        onPress={() => handleQuestionsOptionPress("security+")}
        style={
          questionsOptions === "security+" ? styles.btnSelected : styles.btn
        }
      >
        <Text style={styles.btnText}>Security+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleQuestionsOptionPress("pentest+")}
        style={
          questionsOptions === "pentest+" ? styles.btnSelected : styles.btn
        }
      >
        <Text style={styles.btnText}>Pentest+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleQuestionsOptionPress("ports")}
        style={questionsOptions === "ports" ? styles.btnSelected : styles.btn}
      >
        <Text style={styles.btnText}>Ports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleQuestionsOptionPress("all")}
        style={questionsOptions === "all" ? styles.btnSelected : styles.btn}
      >
        <Text style={styles.btnText}>All</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Number of questions:</Text>
      <TouchableOpacity
        onPress={() => handleNumberOfQuestionsPress(5)}
        style={numberOfQuestions === 5 ? styles.btnSelected : styles.btn}
      >
        <Text style={styles.btnText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleNumberOfQuestionsPress(10)}
        style={numberOfQuestions === 10 ? styles.btnSelected : styles.btn}
      >
        <Text style={styles.btnText}>10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleNumberOfQuestionsPress(25)}
        style={numberOfQuestions === 25 ? styles.btnSelected : styles.btn}
      >
        <Text style={styles.btnText}>25</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleNumberOfQuestionsPress(50)}
        style={numberOfQuestions === 50 ? styles.btnSelected : styles.btn}
      >
        <Text style={styles.btnText}>50</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleStartQuiz} style={styles.btnStart}>
        <Text style={styles.btnText}>&rarr;</Text>
      </TouchableOpacity>
    </View>
  );
};

Options.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  btn: {
    backgroundColor: Colors.black,
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    position: "relative",
    borderRadius: 15,
    borderColor: Colors.lila,
    borderWidth: 2,
    marginHorizontal: "25%",
    marginVertical: 10,
    alignItems: "center",
  },
  btnSelected: {
    backgroundColor: Colors.lila,
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    position: "relative",
    borderRadius: 15,
    borderColor: Colors.lila,
    borderWidth: 2,
    marginHorizontal: "25%",
    marginVertical: 10,
    alignItems: "center",
  },
  btnStart: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    position: "relative",
    borderRadius: 15,
    marginHorizontal: "5%",
    marginVertical: 10,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1.1,
  },
});

export default Options;
