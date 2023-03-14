import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import * as Location from "expo-location";
import MapView, { Callout, Marker } from "react-native-maps";

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            const _location = await Location.getCurrentPositionAsync({});
            if (_location && _location !== null) {
                const { latitude, longitude } = _location.coords;
                setLocation({ latitude, longitude });
            }
        })();
    }, []);

    const handleGragStart = useCallback((e) => {}, []);

    const handleGragEnd = useCallback((e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setLocation({ latitude, longitude });
    }, []);

    if (!location || location === null)
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider="google"
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    draggable={true}
                    coordinate={location}
                    onDragStart={handleGragStart}
                    onDragEnd={handleGragEnd}
                >
                    <Callout>
                        <Text>I'm here</Text>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    paragraph: {
        fontSize: 24,
        fontWeight: "500",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
