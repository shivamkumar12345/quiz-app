// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBISFbQqpPFUvxluw3PRhZBdVKYAi7o8Uk",
  authDomain: "react-task-624c3.firebaseapp.com",
  projectId: "react-task-624c3",
  storageBucket: "react-task-624c3.appspot.com",
  messagingSenderId: "3516511082",
  appId: "1:3516511082:web:100706dfcbb5d3757b6b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);