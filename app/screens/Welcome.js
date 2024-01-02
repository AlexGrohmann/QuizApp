import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

export const Colors = {
  blue: "#6ca6e0",
  bluePink: "#818ed9",
  lila: "#9676d2",
  pink: "#ab5fcb",
  black: "#000000",
};

const Welcome = ({ navigation }) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [progress, setProgress] = useState(new Animated.Value(0));

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

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
          startQuiz();
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>&rarr;</Text>
      </TouchableOpacity>
    </View>
  );
};

Welcome.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  btn: {
    backgroundColor: Colors.lila,
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    position: "relative",
    borderRadius: 15,
    marginHorizontal: "25%",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1.1,
  },
});

export default Welcome;
