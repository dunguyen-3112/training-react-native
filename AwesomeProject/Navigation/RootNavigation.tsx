import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    HOME_SCREEN,
    LOGIN_SCREEN,
    PROFILE_SCREEN,
    SIGNUP_SCREEN,
} from '../Constants';
import {HomeScreen, LoginScreen, ProfileScreen, SignupScreen} from '../screens';

export type RootStackParamsList = {
    [HOME_SCREEN]: undefined;
    [LOGIN_SCREEN]: undefined;
    [SIGNUP_SCREEN]: undefined;
    [PROFILE_SCREEN]: undefined;
};

const RootNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamsList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
                <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
                <Stack.Screen
                    name={LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{headerBackVisible: false}}
                />
                <Stack.Screen
                    name={SIGNUP_SCREEN}
                    component={SignupScreen}
                    options={{headerBackVisible: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
