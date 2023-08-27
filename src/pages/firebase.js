import { initializeApp } from 'firebase/app';

// import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: 'AIzaSyDf_bLo-BHgcwoLFid9owKdOULEvoIPwBs',
  // authDomain: 'drive-clone-next.firebaseapp.com',
  // projectId: 'drive-clone-next',
  // storageBucket: 'drive-clone-next.appspot.com',
  // messagingSenderId: '212839785688',
  // appId: '1:212839785688:web:43999d6475745c3085e3ad',
  apiKey: 'AIzaSyAmSTlFfh3w2a0axJ1-aWyRSeIhbQk7EsU',
  authDomain: 'clone-drive-85011.firebaseapp.com',
  projectId: 'clone-drive-85011',
  storageBucket: 'clone-drive-85011.appspot.com',
  messagingSenderId: '109180603047',
  appId: '1:109180603047:web:418a35cc6147af7678a982',
};

// let firebaseApp;

// Initialize Firebase
// if (!firebase.apps.length) {
//   firebaseApp = initializeApp(firebaseConfig);
// }

// let firebaseApp = getApp();
const firebaseApp = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth();

export const storage = getStorage();
// Create a storage reference from our storage service
export const storageRef = ref(storage);

export const provider = new GoogleAuthProvider();

// export { auth, provider };
// export { auth, provider, db, storage, storageRef };

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore();

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore();
