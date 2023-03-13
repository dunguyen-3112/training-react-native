import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const _user = Auth().currentUser();
    }, []);
    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
