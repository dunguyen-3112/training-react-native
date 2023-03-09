import Constants from 'expo-constants';

export const API_FOOD = 'foods';

const ip = Constants.expoConfig?.extra?.ip;

export const API_ENDPOINT = `http://${ip}:3000`;
