import {
  View,
  Text,
  StatusBar,
  Modal,
  Button,
  Image,
  Pressable,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { FadeInView } from "../components";

export default function Eat() {
  const [isVisible, setIsVisible] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const rotationIn = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(rotation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start()
    );
  };

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden={false} animated={true} />
      <FadeInView>
        <Text>Fading View</Text>
      </FadeInView>
      <Pressable onPressIn={rotationIn}>
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            transform: [
              {
                rotate: spin,
              },
            ],
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          }}
        />
      </Pressable>
      <Button title="Display Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible}>
        <Button title="Hidden Modal" onPress={() => setIsVisible(false)} />
      </Modal>
    </View>
  );
}
