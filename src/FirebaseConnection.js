import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBMfknV-No3MWccYteE4kWaOt9VR_dzpv4",
    authDomain: "devsapp-8b184.firebaseapp.com",
    databaseURL: "https://devsapp-8b184.firebaseio.com",
    projectId: "devsapp-8b184",
    storageBucket: "devsapp-8b184.appspot.com",
    messagingSenderId: "774458397485",
    appId: "1:774458397485:web:99a856b04cea3608a579a4",
    measurementId: "G-EQY2MBJ4Z4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;