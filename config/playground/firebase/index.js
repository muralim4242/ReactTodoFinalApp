import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyCayBuZ2xPxELt7ajNlzHz5CIXqyIaaHXM",
   authDomain: "murali-todo-test.firebaseapp.com",
   databaseURL: "https://murali-todo-test.firebaseio.com",
   storageBucket: "murali-todo-test.appspot.com"
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
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
