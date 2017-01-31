import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBY6Lb4PImySkIuLsZ5P-S1znnQNl3zMng",
    authDomain: "jo-todo-app.firebaseapp.com",
    databaseURL: "https://jo-todo-app.firebaseio.com",
    storageBucket: "jo-todo-app.appspot.com",
    messagingSenderId: "88191504591"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Joanzo',
        age: 25
    },
});

/*firebaseRef.update({
    isRunning: false,
    'app/name': 'Todo Application',
});*/

/*firebaseRef.child('app').update({
    name: 'Todo Application'
}).then(() => {
    console.log('Updated Worked !');
}, (e) => {
    console.log('Updated failed');
})*/

/*firebaseRef.update({
    'app/name' : 'Todo Application',
    'user/name' : 'Jojo'
});

firebaseRef.child('app').update({
    name: 'Todo Application'
});
firebaseRef.child('user').update({
    name: 'Toa toa'
});*/
/*
firebaseRef.child('user/age').remove();
firebaseRef.child('user').update({
    age: null
})
*/


/*// once listen only once for data
firebaseRef.once('value').then((snapshot) => {
    console.log('Got entire database', snapshot.val());
}, (e) => {
    console.log('Unable to fetch value', e);
})

// Fetch app only
firebaseRef.child('app').once('value').then((snapshot) => {
    console.log('Got entire database', snapshot.key, snapshot.val());
}, (e) => {
    console.log('Unable to fetch value', e);
});

var logData = (snapshot) => {
    console.log('User ref changed', snapshot.val());
};

// ON listen more than once trigger event
firebaseRef.child('user').on('value', logData);



firebaseRef.update({
    'user/name': 'Asem',
});
firebaseRef.update({
    'app/name' : 'Tuoduo'
});
// Turn off event listener
//firebaseRef.off();*/

var notesRef = firebaseRef.child('todos');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});
var newNoteRef = notesRef.push({
    text: 'Walk the dog'
});
var newNoteRef = notesRef.push({
    text: 'Swiming to be '
});
console.log('TodoId: ', newNoteRef.key);
