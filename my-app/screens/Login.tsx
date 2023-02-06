import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableHighlight
        activeOpacity={0.1}
        onPress={() => {}}
        underlayColor="red"
        style={{ backgroundColor: "green", margin: 2, padding: 5 }}
      >
        <View>
          <Text>Login 1</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        style={{ backgroundColor: "yellow", padding: 5, margin: 2 }}
      >
        <View>
          <Text>Login 2</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback>
        <View>
          <Text>Login 3</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
