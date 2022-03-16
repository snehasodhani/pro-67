import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyDqXwI2857qhrJozKhvtP5eQ0dY7QmJhqA",
  authDomain: "pro-67-f68ad.firebaseapp.com",
  projectId: "pro-67-f68ad",
  storageBucket: "pro-67-f68ad.appspot.com",
  messagingSenderId: "775180824308",
  appId: "1:775180824308:web:6f5d0872966d7155a6f8a1"
};

firebase.initializeApp(firebaseConfig);


export default firebase.database();