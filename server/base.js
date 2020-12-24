const firebase = require('firebase');

const db = firebase.initializeApp({
    apiKey: "AIzaSyAQ2-FgFsRgpnkeZN-rLrGLiyEyV8McuWc",
    authDomain: "voting-app-2020.firebaseapp.com",
    databaseURL: "https://voting-app-2020-default-rtdb.firebaseio.com",
    projectId: "voting-app-2020",
    storageBucket: "voting-app-2020.appspot.com",
    messagingSenderId: "682852766678",
    appId: "1:682852766678:web:3c3e6ea4eaa616898aca77",
    measurementId: "G-VRK0H58JSE"
});

module.exports = db;