import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    HOME_SCREEN,
    LOGIN_SCREEN,
    MAP_SCREEN,
    PROFILE_SCREEN,
} from '../../constants';
import {RootScreenNavigationProps} from '../../Navigation';
import {MyContext} from '../../App';
import {
    GoogleSignin,
    GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

const HomeScreen = () => {
    const {navigate} =
        useNavigation<RootScreenNavigationProps<typeof HOME_SCREEN>>();

    const {user, setUser} = useContext(MyContext);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '913760054546-90jvnuhv5e2455007i0e8ttan2416h5u.apps.googleusercontent.com',
        });

        if (!user || user === null) {
            navigate(LOGIN_SCREEN);
        }
    }, [navigate, user]);

    const handleLogout = useCallback(() => {
        setUser && setUser(null);
    }, [setUser]);

    const handleNavigateProfile = useCallback(() => {
        navigate(PROFILE_SCREEN);
    }, [navigate]);

    const handleNavigateMap = useCallback(() => {
        navigate(MAP_SCREEN);
    }, [navigate]);

    return (
        <View>
            <Text>{user?.user.email}</Text>
            <Button title="Profile" onPress={handleNavigateProfile} />
            <Button title="Map" onPress={handleNavigateMap} />
            <Button title="Logout" onPress={handleLogout} />
            <Button title="login with Google" onPress={onGoogleButtonPress} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
