import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyDjaO5OzoNUKlcRTVu3MST7cLpwZei8kAY",
    authDomain: "cadastrosistema-ecfdc.firebaseapp.com",
    databaseURL: "https://cadastrosistema-ecfdc.firebaseio.com",
    projectId: "cadastrosistema-ecfdc",
    storageBucket: "cadastrosistema-ecfdc.appspot.com",
    messagingSenderId: "357582950878",
    appId: "1:357582950878:web:c36238b80af52dd9274d4f",
    measurementId: "G-PXP41M2G31"
  };
  firebase.initializeApp(firebaseConfig);


  export default firebase;