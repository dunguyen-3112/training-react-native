import {useEffect, useState} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {handleLogin} from '../utils';
import {TAuth} from '../types';

export default function useAuth(body: TAuth) {
    const [user, setUser] = useState<FirebaseAuthTypes.UserCredential>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const login = async () => {
            try {
                const {password, userName} = body;
                if (
                    !userName ||
                    userName === '' ||
                    !password ||
                    userName === ''
                ) {
                    return;
                }
                setLoading(true);
                const _user = await handleLogin(userName, password);
                if (_user !== null) {
                    setUser(_user);
                }
                setLoading(false);
            } catch (_error: any) {
                setError(_error);
            }
            setLoading(false);
        };
        login();
    }, [body]);

    return {user, loading, error};
}
