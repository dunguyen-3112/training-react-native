import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface FadeInViewProps {
  styles?: object;
  children: React.ReactNode;
}

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const { children } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  console.log(fadeAnim);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View>{children}</View>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fadeIn}>
          <Text>Fade In View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text>Fade Out View</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FadeInView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "green",
    opacity: 0.5,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});
