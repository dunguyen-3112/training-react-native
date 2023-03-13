import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const handleLogin = async (email: string, password: string) => {
    let user: FirebaseAuthTypes.UserCredential;
    user = await auth().signInWithEmailAndPassword(email, password);
    return user;
};
