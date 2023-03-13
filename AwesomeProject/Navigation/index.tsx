import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootNavigation, {RootStackParamsList} from './RootNavigation';

export type RootScreenNavigationProps<T extends keyof RootStackParamsList> =
    NativeStackNavigationProp<RootStackParamsList, T>;

export {RootNavigation};
