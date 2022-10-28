import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjOm5ZdFSrIjF7AxWDsisVF4B7OmS3I2I',
  authDomain: 'clothing-eshop-db-6b2dd.firebaseapp.com',
  projectId: 'clothing-eshop-db-6b2dd',
  storageBucket: 'clothing-eshop-db-6b2dd.appspot.com',
  messagingSenderId: '1049625911602',
  appId: '1:1049625911602:web:32b9296e8026562029372b',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //user doesnot exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error in creating user:', error.message);
    }
  }

  // user data exists
  return userDocRef;
  //if user data doesnot exist

  //
};
