import firebase from 'firebase';

const fire = {
  apiKey: "AIzaSyArLreSNtaFRp04lzckR4rcgS3o0z6yS5A",
  authDomain: "dailyexpense-2114d.firebaseapp.com",
  databaseURL: "https://dailyexpense-2114d.firebaseio.com",
  projectId: "dailyexpense-2114d",
  storageBucket: "dailyexpense-2114d.appspot.com",
  messagingSenderId: "990989130169",
  appId: "1:990989130169:web:aef6fe0faece067763be68"
};

const firebaseConfig=firebase.initializeApp(fire);
export default firebaseConfig;