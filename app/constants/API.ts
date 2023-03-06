import Constants from 'expo-constants';

const ip = Constants.expoConfig?.extra?.ip;

export const API_ENDPOINT = `http://${ip}:3000`;
