import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import data from "../../data";
import ProgressBar from "./ProgressBar";
import Questions from "./Questions";
import { Colors } from "./Welcome";

const QuizPage = ({ navigation }) => {
  const allQuestions = data;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);

  const NUMBER_OF_QUESTIONS = 5;

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };
  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled == false) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];

      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOption == correct_option) {
        setScore(score + 1);
      }
    }
  };
  const handleNext = (navigation) => {
    if (currentQuestionIndex == NUMBER_OF_QUESTIONS - 1) {
      navigation.navigate("Result", {
        score: score,
        restartQuiz: restartQuiz,
        numberOfQuestions: NUMBER_OF_QUESTIONS,
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
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
      ]),
    ]).start();
  };

  const renderOptions = (navigation) => {
    return (
      <View style={{ marginTop: 50 }}>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => validateAnswer(option, navigation)}
              key={index}
              style={[
                { ...styles.optionsText },
                {
                  shadowColor: isOptionsDisabled
                    ? option == correctOption
                      ? "#7be25b"
                      : option == currentOptionSelected
                      ? "#f0222b" //red
                      : Colors.blue
                    : Colors.blue,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ProgressBar
            progress={progress}
            numberOfQuestions={NUMBER_OF_QUESTIONS}
          />

          <Questions
            index={currentQuestionIndex}
            question={allQuestions[currentQuestionIndex]?.question}
            numberOfQuestions={NUMBER_OF_QUESTIONS}
          />
        </View>
        {renderOptions(navigation)}
      </View>
      <View style={{ position: "absolute", bottom: -75, right: 20 }}>
        <TouchableOpacity
          style={[
            { ...styles.btnNext },
            {
              backgroundColor: !currentOptionSelected
                ? Colors.black
                : Colors.pink,
            },
          ]}
          disabled={!currentOptionSelected}
          onPress={() => handleNext(navigation)}
        >
          <Text style={styles.btnNextText}>&rarr;</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { backgroundColor: Colors.black },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
  },
  subContainer: {
    marginTop: 50,
    marginVertical: 10,
    padding: 40,
    borderTopRightRadius: 40,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: Colors.black,
    shadowColor: Colors.lila,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  optionsText: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    backgroundColor: Colors.black,
    shadowColor: Colors.lila,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    minHeight: 70,
  },
  btnNext: {
    borderRadius: 10,

    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: Colors.pink,
  },
  btnNextText: {
    color: "white",
    fontSize: 17,
    letterSpacing: 1.1,
  },
});
export default QuizPage;
