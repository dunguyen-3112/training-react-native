import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {createContext, ReactNode, useState} from 'react';
import {
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootNavigation} from './Navigation';

const initContext: {
    setUser?: (user: FirebaseAuthTypes.UserCredential | null) => void;
    user?: FirebaseAuthTypes.UserCredential | null;
} = {};

export const MyContext = createContext(initContext);

const ContextProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<FirebaseAuthTypes.UserCredential | null>();

    return (
        <MyContext.Provider value={{user, setUser}}>
            {children}
        </MyContext.Provider>
    );
};

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    };

    return (
        <ContextProvider>
            <SafeAreaView style={[backgroundStyle, styles.container]}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <RootNavigation />
            </SafeAreaView>
        </ContextProvider>
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
