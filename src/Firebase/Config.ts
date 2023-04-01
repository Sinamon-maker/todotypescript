// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB9OiYk-OlJsE_gojvOKiwQ4ZfZn676kAc',
	authDomain: 'todo-29844.firebaseapp.com',
	projectId: 'todo-29844',
	storageBucket: 'todo-29844.appspot.com',
	messagingSenderId: '411222659283',
	appId: '1:411222659283:web:923e25b8165e48fd440426',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
