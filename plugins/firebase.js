
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSKm9B1zaypqXtVYlA5tw84M7olHnko1Q",
    authDomain: "website-curriculo.firebaseapp.com",
    databaseURL: "https://website-curriculo.firebaseio.com",
    projectId: "website-curriculo",
    storageBucket: "website-curriculo.appspot.com",
    messagingSenderId: "386145016353",
    appId: "1:386145016353:web:934601beea126d70476160"
};

firebase.initializeApp(firebaseConfig);

export default firebase