import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBY6Lb4PImySkIuLsZ5P-S1znnQNl3zMng",
        authDomain: "jo-todo-app.firebaseapp.com",
        databaseURL: "https://jo-todo-app.firebaseio.com",
        storageBucket: "jo-todo-app.appspot.com",
        messagingSenderId: "88191504591"
    };

    firebase.initializeApp(config);

} catch(e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;
