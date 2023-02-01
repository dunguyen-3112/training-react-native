import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState, useReducer, useLayoutEffect } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    SectionList,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 64,
    height: 64,
};

const background = {
    uri: "https://media.idownloadblog.com/wp-content/uploads/2022/09/iPhone-14-Blue-wallpaper.png",
};
export default function App() {
    type Count = { count: number };
    const [isEnable, setIsEnable] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    type Action =
        | { type: "INCREMENT" }
        | { type: "DECREMENT" }
        | { type: "RESET" };

    const [initalState, setInitalState] = useState({ count: 5 });

    function reducer(state: Count, action: Action) {
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1 };
            case "DECREMENT":
                return { ...state, count: state.count - 1 };
            case "RESET":
                return { ...state, count: 5 };

            default:
                throw new Error(`Unknown action`);
        }
    }

    const [value, dispath] = useReducer(reducer, initalState);
    const [todo, setTodo] = useState("");

    useLayoutEffect(() => {
        if (value.count > 10 || value.count < 0) {
            dispath({ type: "RESET" });
        }
    }, [value]);

    const handleIncrement = useCallback(() => {
        dispath({ type: "INCREMENT" });
    }, []);

    const handleDecrement = useCallback(() => {
        dispath({ type: "DECREMENT" });
    }, []);

    const handleChangeInput = (value: string) => {
        setTodo(value);
    };

    const toggleSwitch = (value: boolean) => {
        setIsEnable(value);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Switch
                    value={isEnable}
                    thumbColor="#f4f3f4"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    onValueChange={toggleSwitch}
                />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                >
                    <KeyboardAvoidingView behavior="height">
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#DDDDDD",
                                alignItems: "center",
                                padding: 10,
                            }}
                        >
                            <Text>Nhan vao day.</Text>
                        </TouchableOpacity>
                        <Image source={logo} />
                        <TextInput placeholder="Please enter name!" />
                    </KeyboardAvoidingView>
                </ScrollView>
            </SafeAreaView>
        </View>
        // <ImageBackground source={background} resizeMode="cover" style={{flex:1, justifyContent:'center'}}>
        // <ActivityIndicator size={'large'} color="green" />
        // {/* </ImageBackground> */}
        //   {/* <ScrollView>
        //     <Button title='Increment' onPress={handleIncrement} accessibilityLabel="Increment"/>
        //     <Text style={{fontSize:40, fontWeight: "500", color:"red"}}>{value.count}</Text>
        //     <Button title='Decrement' onPress={handleDecrement} accessibilityLabel="Decrement"/>
        //     <TextInput
        //     defaultValue={todo}
        //     onChangeText={handleChangeInput}
        //     placeholder="Please enter todo?"
        //     style={{fontSize:20, fontWeight: "500", color:"green", paddingTop:20}}
        //     />
        //     <Image source={logo}/>
        // </ScrollView>
        // <SectionList
        //     sections={[
        //        {title: 'Sources', data:[
        //         {id:1, title:'Javascript'},
        //        ]},
        //        {title: 'Todos', data:[
        //         {id:1, title:'Learn'},
        //        ]},
        //     ]}
        //     renderItem={({item})=><Text key={item.id}>{item.title}</Text>}
        //     renderSectionHeader={({section})=>(
        //         <Text>{section.title}</Text>
        //     )}
        //     />
        //     <FlatList
        //     data={[
        //         {id:1, title:'Javascript'},
        //         {id:2, title:'HTML'},
        //         {id:3, title:'CSS'},
        //         {id:4, title:'React'},
        //         ]}
        //         renderItem={({item})=><Text key={item.id}>{item.title}</Text>}
        //         />
        //  */}
        // <StatusBar style="auto" />
        // </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: "#fff",
        // alignItems: 'center',
        justifyContent: "center",
    },
});
