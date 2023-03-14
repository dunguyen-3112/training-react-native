import React from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    draggable
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="My"
                    description="Nguyen Huu Du"
                />
                <Circle
                    center={{ latitude: 37.78825, longitude: -122.4324 }}
                    fillColor="#a011df"
                    radius={500}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
