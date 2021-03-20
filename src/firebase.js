import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCNX10_TLRsqnD-A-DB0wYvJ3vS0pSVUhI',
	authDomain: 'react-twitter-clone-499e5.firebaseapp.com',
	projectId: 'react-twitter-clone-499e5',
	storageBucket: 'react-twitter-clone-499e5.appspot.com',
	messagingSenderId: '652735452530',
	appId: '1:652735452530:web:f95e55ac54fb798bd879eb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
