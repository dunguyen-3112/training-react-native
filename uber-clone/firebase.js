import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG05OzuS9V_H-wF3O-xGBGaI-pa3ED_z8",
    authDomain: "uber-clone-62646.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://uber-clone-62646-default-rtdb.firebaseio.com",
    projectId: "uber-clone-62646",
    storageBucket: "uber-clone-62646.appspot.com",
    messagingSenderId: "973128869975",
    appId: "1:973128869975:android:64563bbc032ef9873c5b12",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

auth.languageCode = "it";

export { auth };
export * from "firebase/auth";
