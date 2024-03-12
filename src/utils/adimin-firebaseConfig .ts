// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCVcY8NzeXRtpHJDuWHHdFw4T6Fw5z-GOQ",
    authDomain: "gcpocket-4f325.firebaseapp.com",
    projectId: "gcpocket-4f325",
    storageBucket: "gcpocket-4f325.appspot.com",
    messagingSenderId: "659075767234",
    appId: "1:659075767234:web:58ebb2613a91c24e57d45b",
    measurementId: "G-DE953BDWR2"
  };
  // Initialize Firebase
  export const FIREBASE_ADMIN_APP = initializeApp(firebaseConfig);

