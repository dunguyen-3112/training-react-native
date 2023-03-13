import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IUser} from './types';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  FirebaseAuthTypes;
  const [user, setUser] = useState<FirebaseAuthTypes.UserCredential>();

  useEffect(() => {
    auth()
      .signInWithEmailAndPassword('dunguyenhuu.it2019@gmail.com', '123456')
      .then(_user => {
        setUser(_user);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.text}>{user?.user.email}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    fontWeight: '600',
    fontSize: 40,
    color: '#000000',
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default App;
