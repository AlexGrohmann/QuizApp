import React from "react";
import { View, StyleSheet, Text } from "react-native";
import data from "../../data";
import { Colors } from "./Welcome";

const Questions = ({ index, question, numberOfQuestions }) => {
  return (
    <View style={{}}>
      {/* Question Counter */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{ color: "white", fontSize: 15, opacity: 0.6, marginRight: 2 }}
        >
          {index + 1}
        </Text>
        <Text style={{ color: "white", fontSize: 13, opacity: 0.6 }}>
          / {numberOfQuestions}
        </Text>
      </View>

      {/* Question */}
      <Text
        style={{
          color: "white",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {question}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default Questions;
