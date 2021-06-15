import firebase from 'firebase/app';
import "firebase/auth"

export const fire = firebase.initializeApp({
    apiKey: "AIzaSyAapZgzHehWUVxtB3LiZ6MZ9lPfJy3f0ik",
    authDomain: "authfront.firebaseapp.com",
    projectId: "authfront",
    storageBucket: "authfront.appspot.com",
    messagingSenderId: "415745377755",
    appId: "1:415745377755:web:6ba51c1d77f6ace0c2d3fe"
})

export const auth=fire.auth()