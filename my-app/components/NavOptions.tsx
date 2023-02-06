import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const options = [
  {
    id: "123",
    title: "Get a ride",
    img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
    screen: "About",
  },
  {
    id: "124",
    title: "Oder food",
    img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
    screen: "Eat",
  },
  {
    id: "125",
    title: "Login",
    img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
    screen: "Login",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();

  return (
    <View style={styles.navOptions}>
      <FlatList
        data={options}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.navOption}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image
              source={{
                uri: item.img,
              }}
              style={{ width: 120, minHeight: 120, resizeMode: "contain" }}
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navOptions: {},
  navOption: {
    backgroundColor: "#ccc",
    alignItems: "center",
    padding: 10,
    margin: 2,
    borderRadius: 5,
  },
});
