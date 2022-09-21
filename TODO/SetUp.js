// In App.js in a new project

import * as React from 'react';
import App from './App';

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
// const firebaseConfig = {
//   apiKey: 'AIzaSyC1D4IOjfVQK_G9BWKrHqiaSR5ywQcGUUw',
//   authDomain: 'tododemo-801c5.firebaseapp.com',
//   databaseURL: '',
//   projectId: 'tododemo-801c5',
//   storageBucket: 'tododemo-801c5.appspot.com',
//   messagingSenderId: '547853541083',
//   appId: '1:547853541083:web:8256d25ab9ca0f5d17f6fe',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
export {firebase, firestore};
function SetUp() {
  return <App />;
}

export default SetUp;
